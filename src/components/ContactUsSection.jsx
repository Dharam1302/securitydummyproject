import React from "react";
import styles from "./ContactUsSection.module.css";
const ContactUsSection = () => (
  <footer>
    <div className={styles.container}>
      <div className={styles.section}>
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className={styles.section}>
        <h3>Contact</h3>
        <p>Email: info@example.com</p>
        <p>Phone: +123-456-7890</p>
        <p>Address: 123 Street, City, Country</p>
      </div>
    </div>
    <div className={styles.bottom}>
      <p>&copy; 2025 Your Company. All Rights Reserved.</p>
    </div>
  </footer>
);

export default ContactUsSection;
