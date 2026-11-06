const services = [
  ["01", "General Medical Consultations", "Medical consultations and assessment."],
  ["02", "Obstetrics and Gynaecology", "Women's reproductive and pregnancy-related healthcare."],
  ["03", "Antenatal Care", "Healthcare support during pregnancy."],
  ["04", "Family Planning", "Family planning information and services."],
  ["05", "Paediatric Care", "Healthcare services for children."],
  ["06", "General Surgery", "General surgical services."],
  ["07", "Dental Care", "Dental healthcare and teeth whitening."],
  ["08", "Ultrasound Scanning", "Ultrasound scanning services."],
  ["09", "ECG", "Electrocardiography services."],
  ["10", "ENT", "Ear, nose and throat services."],
  ["11", "Anaesthesia", "Anaesthesia services."],
  ["12", "Diagnostic and Imaging Services", "Diagnostic investigations and imaging."],
  ["13", "Cardiology", "Heart and cardiovascular healthcare."],
  ["14", "Dermatology", "Skin healthcare services."],
  ["15", "Gastroenterology", "Digestive system and gastrointestinal healthcare."]
];

const hmoPartners = [
  "Anchor HMO International Company Limited",
  "International Health Management Services (IHMS)",
  "Leadway Health Limited",
  "Sterling Health Managed Care Services Limited",
  "Avon Healthcare Limited",
  "AXA Mansard Health Limited",
  "Bastion Health Limited",
  "Clearline International Limited",
  "Defence Health Maintenance Limited",
  "DOT HMO Ltd",
  "Fountain Healthcare Limited",
  "GNI Healthcare Ltd",
  "Gorah Healthcare Ltd",
  "Health Assur Limited",
  "Health Partners Limited",
  "Healthcare International Limited",
  "Hygeia HMO Limited",
  "Life Worth Medicare Ltd",
  "MB & O Healthcare Services Limited",
  "Medicare Alliance Limited",
  "Mediplan Healthcare Limited",
  "NEM Health Limited",
  "NNPC-HMO Limited",
  "Oceanic Health Management Limited",
  "Novo Health Africa Limited",
  "Phillips Health Management Services Limited",
  "Police Health Maintenance Limited",
  "Precious Healthcare Limited",
  "Reliance Health Limited",
  "Salus Trust GTE",
  "Sunu Health Nigeria Limited",
  "Total Health Trust Limited",
  "United Healthcare International Limited"
];

export default function Home() {
  return (
    <main>
      <div className="topbar">
        55 Okebola Street, Ado-Ekiti, Ekiti State, Nigeria
        <span> &nbsp; | &nbsp; 0803 475 3037</span>
      </div>

      <header className="header container">
        <a href="#home" className="brand">
          <img src="/images/adetade-logo.svg" alt="Adetade Hospital logo" />
          <span>
            <strong>ADETADE HOSPITAL</strong>
            <small>ADO-EKITI, NIGERIA</small>
          </span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#facilities">Facilities</a>
          <a href="#patients">Patients &amp; Visitors</a>
          <a href="#partners">HMO Partners</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="button" href="#contact">Contact Us</a>
      </header>

      <section className="hero" id="home">
        <div className="container hero-content">
          <span className="eyebrow">WELCOME TO ADETADE HOSPITAL</span>
          <h1>Your Health Matters.<br /><span>Your Well-being Comes First.</span></h1>
          <p>
            Welcome to Adetade Hospital, Ado-Ekiti. We are committed to
            providing healthcare services with professionalism, compassion
            and respect. Whether you are visiting for a consultation,
            treatment or medical care, we are here to support you throughout
            your healthcare journey.
          </p>
          <a className="button" href="#contact">Get in Touch</a>
        </div>
      </section>

      <section className="section container" id="about">
        <div className="page-banner banner-about"><h2>About Adetade Hospital</h2></div>
        <div>
          <span className="eyebrow">ABOUT OUR HOSPITAL</span>
          <h2>A Legacy of Healthcare Since 1984</h2>
        </div>
        <div className="content-copy">
          <p>
            Established in 1984, Adetade Hospital is one of the oldest
            private hospitals in Ekiti State. Located at 55 Okebola Street,
            Ado-Ekiti, we have a long-standing presence in the community.
          </p>
          <p>
            Our hospital provides a range of healthcare services. We are
            committed to treating patients with professionalism, compassion
            and respect.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="page-banner banner-founder"><h2>Our Founder</h2></div>
          <span className="eyebrow">OUR FOUNDER</span>
          <h2>The Person Behind Our Foundation</h2>
          <div className="founder-card">
            <div className="founder-photo-placeholder">
              <span>Founder’s Photograph</span>
              <small>Photo will be added here</small>
            </div>
            <div className="founder-details">
              <h3>Dr. Adedapo Tade</h3>
              <p className="founder-title">
                General Practitioner (GP) | Founder &amp; Medical Director
              </p>
              <p className="content-copy">
                Dr. Adedapo Tade is the founder and Medical Director of
                Adetade Hospital. As a General Practitioner, he provides
                medical leadership and works with a dedicated team of nurses
                to support the hospital’s delivery of patient care.
                Since establishing the hospital in 1984, he has continued
                to contribute to healthcare services in Ado-Ekiti.
              </p>
              <a className="founder-social-link"
                href="https://www.instagram.com/adedapotade/"
                target="_blank" rel="noopener noreferrer">
                Follow Dr. Adedapo Tade on Instagram
              </a>
            </div>
          </div>
          <div className="info-grid">
            <article className="info-card">
              <h3>Our Mission</h3>
              <p className="content-copy">
                To provide healthcare services with professionalism,
                compassion and respect for every patient.
              </p>
            </article>
            <article className="info-card">
              <h3>Our Vision</h3>
              <p className="content-copy">
                To remain a trusted healthcare institution serving
                individuals, families and the wider community.
              </p>
            </article>
            <article className="info-card">
              <h3>Our Values</h3>
              <p className="content-copy">
                Compassion, professionalism, integrity, respect and
                commitment to quality care.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="page-banner banner-services"><h2>Our Medical Services</h2></div>
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">OUR MEDICAL SERVICES</span>
            <h2>Healthcare Services</h2>
            <p>Explore the healthcare services offered at Adetade Hospital, Ado-Ekiti.</p>
          </div>
          <div className="service-grid">
            {services.map(([number, title, description]) => (
              <article className="service-card" key={number}>
                <span className="number">{number}</span>
                <div className="plus">+</div>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="#contact">Make an enquiry →</a>
              </article>
            ))}
          </div>
          <p className="disclaimer">
            Please contact the hospital to confirm service availability and details.
          </p>
        </div>
      </section>

      <section className="content-section" id="facilities">
        <div className="container"><div className="page-banner banner-facilities"><h2>Hospital Facilities</h2></div></div>
        <div className="container">
          <span className="eyebrow">OUR HOSPITAL</span>
          <h2>Facilities</h2>
          <p className="content-copy">
            Adetade Hospital provides healthcare services in Ado-Ekiti.
            For information about specific facilities, equipment and
            available diagnostic services, please contact our hospital
            directly.
          </p>
          <a className="button" href="#contact">Enquire About Our Facilities</a>
        </div>
      </section>

      <section className="content-section" id="patients">
        <div className="container"><div className="page-banner banner-patients"><h2>Patients & Visitors</h2></div></div>
        <div className="container">
          <span className="eyebrow">PATIENTS &amp; VISITORS</span>
          <h2>Information for Your Visit</h2>
          <div className="info-grid">
            <article className="info-card">
              <h3>Appointments</h3>
              <p className="content-copy">
                Contact the hospital by phone or email to make an appointment
                request. Requests are subject to confirmation by the hospital.
              </p>
            </article>
            <article className="info-card">
              <h3>Hospital Location</h3>
              <p className="content-copy">
                55 Okebola Street, Ado-Ekiti, Ekiti State, Nigeria.
              </p>
              <a href="https://www.google.com/maps/search/?api=1&query=55+Okebola+Street+Ado-Ekiti">
                Get directions →
              </a>
            </article>
            <article className="info-card">
              <h3>Enquiries</h3>
              <p className="content-copy">
                Our contact details are available below. Please get in touch
                for information about services and visiting arrangements.
              </p>
              <a href="#contact">Contact the hospital →</a>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section" id="partners">
        <div className="container"><div className="page-banner banner-partners"><h2>Our HMO Partners</h2></div></div>
        <div className="container">
          <span className="eyebrow">HEALTH INSURANCE</span>
          <h2>Our HMO Partners</h2>
          <p className="content-copy">
            Adetade Hospital works with the following health maintenance
            organisations. Patients are advised to confirm their plan,
            eligibility and covered benefits with the hospital before
            receiving treatment.
          </p>

          <h3>National Health Insurance Authority (NHIA)</h3>
          <p className="content-copy">
            Adetade Hospital partners with the National Health Insurance
            Authority (NHIA). Please contact the hospital to confirm
            applicable coverage and programme details.
          </p>

          <h3>Private HMO Partners</h3>
          <div className="partner-grid">
            {hmoPartners.map((partner, index) => (
              <div className="partner-card" key={partner}>
                <span className="number">{String(index + 1).padStart(2, "0")}</span>
                <p>{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact container" id="contact">
        <div className="page-banner banner-contact"><h2>Contact Adetade Hospital</h2></div>
        <div>
          <span className="eyebrow">CONTACT ADETADE HOSPITAL</span>
          <h2>We are happy to hear from you.</h2>
          <p>
            Visit us or contact our hospital for enquiries, appointment
            requests and further information.
          </p>
          <p><strong>Phone:</strong> <a href="tel:08034753037">0803 475 3037</a></p>
          <p><strong>Alternative:</strong> <a href="tel:08107296484">0810 729 6484</a></p>
          <p><strong>Email:</strong> <a href="mailto:adetadehospital@gmail.com">adetadehospital@gmail.com</a></p>
        </div>
        <div className="address-card">
          <h3>Visit Our Hospital</h3>
          <p>55 Okebola Street,<br />Ado-Ekiti, Ekiti State,<br />Nigeria.</p>
          <a
            className="button"
            href="https://www.google.com/maps/search/?api=1&query=55+Okebola+Street+Ado-Ekiti"
            target="_blank"
            rel="noreferrer"
          >
            Find Us on Google Maps
          </a>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-inner">
            <div>
              <strong>ADETADE HOSPITAL</strong>
              <p>
                Committed to providing healthcare with professionalism,
                compassion and respect.
              </p>
              <p>55 Okebola Street, Ado-Ekiti, Ekiti State, Nigeria.</p>
            </div>

            <div>
              <h3>Quick Links</h3>
              <div className="footer-links">
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#services">Services</a>
                <a href="#facilities">Facilities</a>
                <a href="#patients">Patients &amp; Visitors</a>
                <a href="#partners">HMO Partners</a>
                <a href="#contact">Contact Us</a>
              </div>
            </div>

            <div>
              <h3>Contact &amp; Social Media</h3>
              <p><a href="tel:08034753037">0803 475 3037</a></p>
              <p><a href="tel:08107296484">0810 729 6484</a></p>
              <p><a href="mailto:adetadehospital@gmail.com">adetadehospital@gmail.com</a></p>
              <div className="social-links">
                <a href="https://www.instagram.com/explore/locations/546420195478094/adetade-hospital-ado/" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://www.facebook.com/adetadehospitalado/" target="_blank" rel="noreferrer">Facebook</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            © 2026 Adetade Hospital. All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
