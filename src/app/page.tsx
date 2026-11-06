import SitePage from "./components/SitePage";

const services = [
  { icon: "🩺", name: "General Medical Consultations" },
  { icon: "🤰", name: "Obstetrics and Gynaecology" },
  { icon: "🤱", name: "Antenatal Care" },
  { icon: "🧸", name: "Paediatric Care" },
  { icon: "🏥", name: "General Surgery" },
  { icon: "🦷", name: "Dental Care" },
];

export default function HomePage() {
  return (
    <SitePage
      title="Quality Healthcare, Close to Home"
      imageClass="banner-home"
      activePath="/"
    >
      <section className="section">
        <div className="content-copy">
          <p className="eyebrow">WELCOME TO ADETADE HOSPITAL</p>
          <h2>Healthcare You Can Trust</h2>
          <p>
            Established in 1984, Adetade Hospital is committed to providing
            healthcare services to individuals and families in Ado-Ekiti and
            surrounding communities.
          </p>
          <p>
            Our team is dedicated to supporting your health through medical
            consultations, specialist services, diagnostic care and patient
            support.
          </p>
          <a className="button" href="/about">Learn About Us</a>
        </div>
      </section>

      <section className="section">
        <h2>Our Medical Services</h2>
        <p>Explore some of the healthcare services available at our hospital.</p>

        <div className="services home-services-grid">
          {services.map((service) => (
            <article className="service-card home-service-card" key={service.name}>
              <div className="home-service-icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3>{service.name}</h3>
            </article>
          ))}
        </div>

        <p>
          <a className="button" href="/services">View All Services</a>
        </p>
      </section>

      <section className="section contact">
        <div className="content-copy">
          <h2>We Are Here to Help</h2>
          <p>
            Contact Adetade Hospital to make an appointment request or ask
            about our services.
          </p>
          <p>
            <strong>Address:</strong> 55 Okebola Street, Ado-Ekiti, Ekiti State.
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:08034753037">0803 475 3037</a>
          </p>
          <a className="button" href="/contact">Contact the Hospital</a>
        </div>
      </section>
    </SitePage>
  );
}
