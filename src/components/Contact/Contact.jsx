import React from "react";
import Footer from "../Home/footer/Footer";
import Middlebar from "../Home/middleBar/Middlebar";
import NavMenu from "../Home/navigationBar/NavMenu";
import Topheader from "../Home/topHeader/Topheader";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <Topheader />
      <Middlebar />
      <NavMenu />
      <div className="contact-header">
        <h1 className="contact-heading">Contact us</h1>
      </div>
      <div className="contact-info-container">
        <div className="contact-info-item mail">
          <h2>EMAIL</h2>
          <p>info@example.com</p>
          <p>info@emaan.edu.pk</p>
        </div>
        <div className="contact-info-item address">
          <h2>MAIN OFFICE LOCATION</h2>
          <p>Plot # A-2, Sector 28 Suparco Rd,</p>
          <p>Gulzar-e-Hijri Scheme 33, Karachi, Sindh 75330</p>
        </div>
        <div className="contact-info-item phone">
          <h2>PHONE</h2>
          <p>0333 1316577</p>
        </div>
      </div>

      <div className="form-container">
        <div className="map-column">
          <h2 class="Map-heading">Campus Location</h2>
          <iframe
            width="90%"
            height="435"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.8306360444846!2d67.13064331500616!3d24.947263584006545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339e95b79a3e5%3A0xb2e46cb7217938ca!2sEmaan%20Institute%20of%20Management%20and%20Sciences!5e0!3m2!1sen!2s!4v1649882604706!5m2!1sen!2s"
          ></iframe>
        </div>
        <div className="form-column">
          <h2 class="form-heading">Leave Us Your Info</h2>

          <form>
            <input
              type="text"
              name="firstname"
              placeholder="First name"
              required
            />
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
