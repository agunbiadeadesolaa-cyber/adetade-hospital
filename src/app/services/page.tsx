import SitePage from "../components/SitePage";

const services = [
  {
    icon: "🩺",
    name: "General Medical Consultations",
    description: "Medical assessment, diagnosis and treatment guidance for individuals and families.",
  },
  {
    icon: "🤰",
    name: "Obstetrics and Gynaecology",
    description: "Medical care and support for women's reproductive and maternal health.",
  },
  {
    icon: "🤱",
    name: "Antenatal Care",
    description: "Care and monitoring to support mothers throughout pregnancy.",
  },
  {
    icon: "👨‍👩‍👧",
    name: "Family Planning",
    description: "Guidance and services to help individuals and families make informed choices.",
  },
  {
    icon: "🧸",
    name: "Paediatric Care",
    description: "Healthcare services focused on the health and well-being of children.",
  },
  {
    icon: "🏥",
    name: "General Surgery",
    description: "Surgical assessment and treatment provided by the hospital's medical team.",
  },
  {
    icon: "🦷",
    name: "Dental Care",
    description: "Dental assessment and care to support oral health.",
  },
  {
    icon: "🖥️",
    name: "Ultrasound Scanning",
    description: "Ultrasound examinations to support medical assessment and diagnosis.",
  },
  {
    icon: "❤️",
    name: "ECG",
    description: "Electrocardiography to record the heart's electrical activity.",
  },
  {
    icon: "👂",
    name: "ENT",
    description: "Medical assessment and care for ear, nose and throat conditions.",
  },
  {
    icon: "💉",
    name: "Anaesthesia",
    description: "Anaesthesia services supporting appropriate medical and surgical procedures.",
  },
  {
    icon: "🔬",
    name: "Diagnostic and Imaging Services",
    description: "Diagnostic investigations and imaging services to support patient care.",
  },
  {
    icon: "🫀",
    name: "Cardiology",
    description: "Medical assessment and care relating to heart health.",
  },
  {
    icon: "🧴",
    name: "Dermatology",
    description: "Medical assessment and care for skin conditions.",
  },
  {
    icon: "🩻",
    name: "Gastroenterology",
    description: "Medical assessment and care for digestive system conditions.",
  },
];

export default function ServicesPage() {
  return (
    <SitePage
      title="Our Medical Services"
      imageClass="banner-services"
      activePath="/services"
    >
      <section className="content-section services-intro">
        <h2>Healthcare Services</h2>
        <p>
          Adetade Hospital offers a range of medical services to support
          the healthcare needs of individuals and families in Ado-Ekiti
          and surrounding communities.
        </p>
      </section>

      <section className="content-section">
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.name}>
              <div className="service-icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section services-contact">
        <h2>Need Medical Assistance?</h2>
        <p>
          Contact our hospital to make an enquiry or request an appointment.
          Appointment requests are subject to confirmation by the hospital.
        </p>
        <a className="services-contact-link" href="/contact">
          Contact Adetade Hospital
        </a>
      </section>
    </SitePage>
  );
}
