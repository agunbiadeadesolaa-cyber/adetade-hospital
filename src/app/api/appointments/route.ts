import { NextResponse } from "next/server";
import { Resend } from "resend";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength = 1000) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = clean(body.name, 120);
    const phone = clean(body.phone, 40);
    const email = clean(body.email, 160);
    const service = clean(body.service, 120);
    const date = clean(body.date, 20);
    const time = clean(body.time, 40);
    const message = clean(body.message, 2000);

    if (!name || !phone || !service || !date || !time) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (email && !emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.APPOINTMENT_FROM_EMAIL;
    const to = process.env.APPOINTMENT_TO_EMAIL;

    if (!apiKey || !from || !to) {
      console.error("Appointment email configuration is missing.");
      return NextResponse.json(
        {
          error:
            "Appointment booking is temporarily unavailable. Please contact the hospital by phone.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    // 1. Send the appointment request to the hospital.
    const hospitalEmail = await resend.emails.send({
      from,
      to,
      replyTo: email || undefined,
      subject: `New appointment request - ${name}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Patient:</strong> ${escapeHtml(name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email || "Not provided")}</p>
        <p><strong>Department / Service:</strong> ${escapeHtml(service)}</p>
        <p><strong>Preferred date:</strong> ${escapeHtml(date)}</p>
        <p><strong>Preferred time:</strong> ${escapeHtml(time)}</p>
        <p><strong>Additional message:</strong><br />${escapeHtml(message || "None")}</p>
        <hr />
        <p>Please contact the patient to confirm the appointment.</p>
      `,
    });

    if (hospitalEmail.error) {
      console.error("Hospital appointment email error:", hospitalEmail.error);
      return NextResponse.json(
        {
          error:
            "We could not send your request. Please try again or call the hospital.",
        },
        { status: 502 }
      );
    }

    // 2. Send an acknowledgement to the patient if they provided an email.
    if (email) {
      const patientEmail = await resend.emails.send({
        from,
        to: email,
        subject: "We have received your appointment request - Adetade Hospital",
        html: `
          <div style="font-family: Arial, sans-serif; color: #263746; line-height: 1.6;">
            <h2 style="color: #0878b9;">Adetade Hospital</h2>
            <p>Dear ${escapeHtml(name)},</p>

            <p>
              Thank you for choosing Adetade Hospital.
              We have successfully received your appointment request.
            </p>

            <h3>Your Request Details</h3>
            <p><strong>Service:</strong> ${escapeHtml(service)}</p>
            <p><strong>Preferred date:</strong> ${escapeHtml(date)}</p>
            <p><strong>Preferred time:</strong> ${escapeHtml(time)}</p>

            <p>
              Please note that this is a request, not yet a confirmed appointment.
              Our team will contact you to confirm the availability and appointment details.
            </p>

            <p>
              If you need immediate assistance, please call us on
              <strong>0803 475 3037</strong> or <strong>0810 729 6484</strong>.
            </p>

            <p>Thank you for trusting us with your healthcare.</p>

            <p>
              <strong>Adetade Hospital</strong><br />
              55 Okebola Street, Ado-Ekiti, Ekiti State.<br />
              Committed to providing quality healthcare since 1984.
            </p>
          </div>
        `,
      });

      if (patientEmail.error) {
        console.error("Patient confirmation email error:", patientEmail.error);
      }
    }

    return NextResponse.json({
      success: true,
      message: email
        ? "Your request has been received. A confirmation email has been sent if delivery was successful. The hospital will contact you to confirm your appointment."
        : "Your appointment request has been sent. The hospital will contact you to confirm.",
    });
  } catch (error) {
    console.error("Appointment request error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
