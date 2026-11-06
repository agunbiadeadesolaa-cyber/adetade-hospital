import SitePage from "../components/SitePage";

const facilities = [
  {
    name: "Private Wards",
    description: "Comfortable accommodation designed to support patient rest and recovery.",
    image: "https://stgregoryshospital.com/wp-content/uploads/2021/06/Private-Ward.png",
  },
  {
    name: "Male and Female Wards",
    description: "Dedicated ward accommodation for male and female patients.",
    image: "https://stgregoryshospital.com/wp-content/uploads/2021/06/Female-Ward.png",
  },
  {
    name: "Paediatric Ward",
    description: "A dedicated environment for the care and treatment of children.",
    image: "https://stgregoryshospital.com/wp-content/uploads/2021/06/Paediatrics-Ward.png",
  },
  {
    name: "Maternity Ward",
    description: "A supportive environment for mothers receiving maternity care.",
    image: "https://stgregoryshospital.com/wp-content/uploads/2021/06/Maternity-Ward.png",
  },
  {
    name: "Post-natal Ward",
    description: "Care and support for mothers following childbirth.",
    image: "https://stgregoryshospital.com/wp-content/uploads/2021/06/Maternity-Ward.png",
  },
  {
    name: "Dental Ward",
    description: "A dedicated space for dental assessment and treatment.",
    image: "/images/dental-care.jpg",
  },
  {
    name: "Laboratory Ward",
    description: "Laboratory facilities supporting medical tests and investigations.",
    image: "https://stgregoryshospital.com/wp-content/uploads/2021/06/medical-laboratory.png",
  },
  {
    name: "Computerized Medical Records",
    description: "Digital medical record support for patient information management.",
    image: "https://stgregoryshospital.com/wp-content/uploads/2021/06/computerized-medical-records_a.png",
  },
  {
    name: "ECG",
    description: "Electrocardiography services to support heart assessments.",
    image: "https://stgregoryshospital.com/wp-content/uploads/2021/06/ecg-hospital.png",
  },
  {
    name: "Ultrasound Scanning",
    description: "Ultrasound scanning services for medical assessment.",
    image: "https://stgregoryshospital.com/wp-content/uploads/2021/06/Ultrasound-Scan.png",
  },
  {
    name: "Nurse Call System",
    description: "A call system to help patients request assistance from nursing staff.",
    image: "https://stgregoryshospital.com/wp-content/uploads/2021/06/nurse-call-system.png",
  },
  {
    name: "Neonatal Intensive Care Unit",
    description: "Specialised care facilities for newborn babies who need close attention.",
    image: "https://stgregoryshospital.com/wp-content/uploads/2021/06/Neonatal-Intensive-Care-Unit.png",
  },
  {
    name: "Operating Theatre and Intensive Care Unit",
    description: "Facilities supporting surgical procedures and intensive patient care.",
    image: "https://stgregoryshospital.com/wp-content/uploads/2021/06/operating-room.png",
  },
  {
    name: "Delivery Room",
    description: "A dedicated space for childbirth and delivery care.",
    image: "https://stgregoryshospital.com/wp-content/uploads/2021/06/delivery-room.png",
  },
  {
    name: "Pharmacy Services",
    description: "Pharmacy support for patients receiving medical care.",
    image: "https://stgregoryshospital.com/wp-content/uploads/2021/06/pharmacy-technician.png",
  },
  {
    name: "Ultrasound and Echocardiography",
    description: "Imaging support for ultrasound and heart assessments.",
    image: "https://stgregoryshospital.com/wp-content/uploads/2021/06/Ultrasound-with-Endocardiography.png",
  },
  {
    name: "Cardiology",
    description: "Facilities supporting the assessment and care of heart conditions.",
    image: "https://stgregoryshospital.com/wp-content/uploads/2021/06/ecg-hospital.png",
  },
];

export default function FacilitiesPage() {
  return (
    <SitePage
      title="Our Hospital Facilities"
      imageClass="banner-facilities"
      activePath="/facilities"
    >
      <section className="content-section facilities-intro">
        <h2>Our Healthcare Environment</h2>
        <p>
          At Adetade Hospital, we provide a welcoming healthcare environment
          designed to support patient comfort, safety and quality medical care.
          Explore some of the facilities available at our hospital.
        </p>
      </section>

      <section className="content-section">
        <div className="facilities-grid">
          {facilities.map((facility) => (
            <article className="facility-card" key={facility.name}>
              <div className="facility-image-wrap">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="facility-image"
                  loading="lazy"
                />
              </div>
              <div className="facility-card-content">
                <h3>{facility.name}</h3>
                <p>{facility.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section facilities-contact">
        <h2>Need More Information?</h2>
        <p>
          For enquiries about our facilities or medical services, please
          contact our team before visiting.
        </p>
        <p>
          <a href="/contact">Contact Adetade Hospital</a>
        </p>
      </section>
    </SitePage>
  );
}
