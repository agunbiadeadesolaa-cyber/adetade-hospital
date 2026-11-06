import SitePage from "../components/SitePage";

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
  "United Healthcare International Limited",
];

export default function PartnersPage() {
  return (
    <SitePage
      title="Our HMO Partners"
      imageClass="banner-partners"
      activePath="/partners"
    >
      <section className="content-section">
        <h2>Healthcare Coverage and Partnerships</h2>
        <p>
          Adetade Hospital works with the National Health Insurance Authority
          (NHIA) and a network of private Health Maintenance Organisations
          (HMOs) to support access to healthcare.
        </p>
        <p>
          Please contact the hospital to confirm your specific HMO plan,
          eligibility and covered services before visiting.
        </p>
      </section>

      <section className="content-section">
        <h2>National Health Insurance Authority</h2>
        <p>Adetade Hospital partners with the NHIA.</p>
      </section>

      <section className="content-section">
        <h2>Our 33 Private HMO Partners</h2>
        <div className="services-grid">
          {hmoPartners.map((partner, index) => (
            <div className="service-card" key={partner}>
              <h3>{index + 1}. {partner}</h3>
            </div>
          ))}
        </div>
      </section>
    </SitePage>
  );
}
