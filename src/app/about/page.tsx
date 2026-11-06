import SitePage from "../components/SitePage";

export default function AboutPage() {
  return (
    <SitePage
      title="About Adetade Hospital"
      imageClass="banner-about"
      activePath="/about"
    >
      <section className="content-section">
        <h2>Who We Are</h2>
        <p>
          Established in 1984, Adetade Hospital is one of the oldest private
          hospitals in Ekiti State. Located at 55 Okebola Street, Ado-Ekiti,
          we are committed to providing accessible and quality healthcare
          to individuals and families.
        </p>
        <p>
          Our hospital provides a range of medical services supported by
          experienced healthcare professionals and a dedicated nursing team.
        </p>
      </section>

      <section className="content-section">
        <h2>Our History</h2>
        <p>
          Since 1984, Adetade Hospital has served the healthcare needs of
          people in Ado-Ekiti and surrounding communities. We continue to
          build on that history through our commitment to patient care.
        </p>
      </section>

    </SitePage>
  );
}
