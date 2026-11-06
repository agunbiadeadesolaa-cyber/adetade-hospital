"use client";

import { FormEvent, useState } from "react";

export default function AppointmentForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("");
    setSuccess(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service"),
      date: formData.get("date"),
      time: formData.get("time"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to submit your request.");
      }

      setSuccess(true);
      setStatus(result.message);
      form.reset();
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="appointment-form" className="appointment-section">
      <div className="appointment-heading">
        <span className="appointment-label">APPOINTMENT REQUEST</span>
        <h2>Book an Appointment</h2>
        <p>
          Complete the form below and our team will contact you to confirm
          your appointment.
        </p>
      </div>

      <form className="appointment-form" onSubmit={handleSubmit}>
        <div className="appointment-fields">
          <label>
            Full Name *
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              maxLength={120}
              required
            />
          </label>

          <label>
            Phone Number *
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              maxLength={40}
              required
            />
          </label>

          <label>
            Email Address
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              maxLength={160}
            />
          </label>

          <label>
            Department / Service *
            <select name="service" required defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              <option>General Medical Consultations</option>
              <option>Obstetrics and Gynaecology</option>
              <option>Antenatal Care</option>
              <option>Family Planning</option>
              <option>Paediatric Care</option>
              <option>General Surgery</option>
              <option>Dental Care</option>
              <option>Ultrasound Scanning</option>
              <option>ECG</option>
              <option>ENT</option>
              <option>Anaesthesia</option>
              <option>Diagnostic and Imaging Services</option>
              <option>Cardiology</option>
              <option>Dermatology</option>
              <option>Gastroenterology</option>
            </select>
          </label>

          <label>
            Preferred Date *
            <input type="date" name="date" required />
          </label>

          <label>
            Preferred Time *
            <input type="time" name="time" required />
          </label>

          <label className="appointment-full-width">
            Additional Message
            <textarea
              name="message"
              rows={4}
              maxLength={2000}
              placeholder="Tell us anything else we should know (optional)"
            />
          </label>
        </div>

        <button
          type="submit"
          className="appointment-submit"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Appointment Request"}
        </button>

        {status && (
          <p
            className={`appointment-status ${
              success ? "appointment-success" : "appointment-error"
            }`}
            role="status"
          >
            {status}
          </p>
        )}

        <p className="appointment-note">
          Your appointment is not confirmed until our hospital team contacts you.
          For urgent assistance, please call 0803 475 3037.
        </p>
      </form>
    </section>
  );
}
