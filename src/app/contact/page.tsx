import SitePage from "../components/SitePage";
import AppointmentForm from "../components/AppointmentForm";

export default function ContactPage() {
  return (
    <SitePage
      title="Contact Adetade Hospital"
      imageClass="banner-contact"
      activePath="/contact"
    >
      <section className="content-section">
        <h2>Get in Touch</h2>
        <p>
          Contact Adetade Hospital for enquiries about our medical services,
          appointments, HMO coverage and general information.
        </p>
      </section>

      <section className="content-section">
        <h2>Our Contact Information</h2>

        <div className="services-grid">
          <div className="service-card">
            <h3>Visit Us</h3>
            <p>55 Okebola Street, Ado-Ekiti, Ekiti State, Nigeria.</p>
          </div>

          <div className="service-card">
            <h3>Call Us</h3>
            <p><a href="tel:08034753037">0803 475 3037</a></p>
            <p><a href="tel:08107296484">0810 729 6484</a></p>
          </div>

          <div className="service-card">
            <h3>Email Us</h3>
            <p>
              <a href="mailto:adetadehospital@gmail.com">
                adetadehospital@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <AppointmentForm />

      <section className="content-section">
        <h2>Find Us in Ado-Ekiti</h2>
        <p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=55+Okebola+Street+Ado-Ekiti+Ekiti+State+Nigeria"
            target="_blank"
            rel="noreferrer"
          >
            Find Adetade Hospital on Google Maps
          </a>
        </p>
      </section>
    </SitePage>
  );
}
