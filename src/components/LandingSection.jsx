import "./LandingSection.css"; // Import CSS
import landingImage from "../assets/landing-image.jpg"; // Local image

function LandingSection() {
  return (
    <section className="landing-section" id="landing">
      <div className="landing-content">
        <h1>Welcome to Our Site</h1>
        <h2 className="subtitle">Your one-stop shop for amazing products</h2>
        <p>
          Explore our curated collection designed for{" "}
          <span className="highlight">simplicity and quality</span>.
        </p>
        <div className="cta-container">
          <button className="cta-button primary">Shop Now</button>
          <button className="cta-button secondary">Learn More</button>
        </div>
      </div>
      <div className="landing-image-container">
        <img
          src={landingImage}
          alt="Landing visual"
          className="landing-image"
        />
        <div className="image-overlay">
          <p>Featured Collection</p>
        </div>
      </div>
    </section>
  );
}

export default LandingSection;
