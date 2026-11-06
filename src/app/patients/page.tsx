import SitePage from "../components/SitePage";

export default function PatientsPage() {
  return (
    <SitePage
      title="Patients & Visitors"
      imageClass="banner-patients"
      activePath="/patients"
    >
      <section className="content-section">
        <h2>Welcome to Adetade Hospital</h2>
        <p>
          We understand that visiting a hospital can be an important
          experience for patients and their families. Our team is committed
          to helping you access the care and information you need.
        </p>
      </section>

      <section className="content-section">
        <h2>Request an Appointment</h2>
        <p>
          You can contact us by phone or email to enquire about an appointment.
          Please provide your preferred date, time and the medical service
          you require.
        </p>
        <p>
          Appointment requests are subject to confirmation by the hospital.
          Submitting a request does not mean your appointment is confirmed.
        </p>
        <p>
          <a href="/contact">Contact us to request an appointment</a>
        </p>
      </section>

      <section className="content-section">
        <h2>Before Your Visit</h2>
        <p>
          If you have questions about a consultation, available services,
          or what to bring, please contact the hospital before your visit.
        </p>
      </section>

      <section className="content-section">
        <h2>Need Help?</h2>
        <p>
          Call <a href="tel:08034753037">0803 475 3037</a> or
          <a href="tel:08107296484"> 0810 729 6484</a>.
        </p>
        <p>
          Email: <a href="mailto:adetadehospital@gmail.com">
            adetadehospital@gmail.com
          </a>
        </p>
      </section>
    </SitePage>
  );
}
