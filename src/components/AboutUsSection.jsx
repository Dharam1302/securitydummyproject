import React from "react";
import "./AboutUsSection.css";

const AboutUsSection = () => {
  return (
    <section className="about-us">
      <div className="container">
        <h2>About Us</h2>
        <p>
          Welcome to our platform! We are committed to providing the best services with
          a seamless experience. Our team is dedicated to innovation, customer satisfaction,
          and continuous growth.
        </p>
        <div className="team">
          <div className="team-member">
            <img src="/assets/babji.png" alt="Team Member 1" />
            <h3>Babji</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="/assets/hanumanthu.jpeg" alt="Team Member 2" />
            <h3>Hanumanthu</h3>
            <p>Full Stack Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
