import React from "react";
import "./fotter.css";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_left">
        <div className="footer_left_top">
          <div>
            <h3>USA</h3>
            <p>
              447 Broadway, <br />
              2nd Floor New York, <br />
              NY, 10013 <br />
              Phone number: 78454221212
            </p>
          </div>
          <div>
            <h3>IND</h3>
            <p>
              447 Broadway, <br />
              2nd Floor New York, <br />
              NY, 10013 <br />
              Phone number: 78454221212
            </p>
          </div>
          <div>
            <h3> UAE</h3>
            <p>
              447 Broadway, <br />
              2nd Floor New York, <br />
              NY, 10013 <br />
              Phone number: 78454221212
            </p>
          </div>
        </div>
        <div className="footer_left_middle">
          <div>
            <span>Email : sales@Transportsimple.com </span>
          </div>
          <div>
            <span>Whatapp : +91-6372801404</span>
          </div>
          <div>
            <span>Join : careers@Transportsimple.com </span>
          </div>
        </div>
        <div className="footer_left_bottom">
          <div>
            <b>Home</b>
          </div>
          <div>
            <b>Feature</b>
          </div>
          <div>
            <b>About Us</b>
          </div>
          <div>
            <b>Pricing</b>
          </div>
          <div>
            <b>Contact us</b>
          </div>
        </div>
      </div>
      <div className="footer_right">
        <form className="email-form">
          <div className="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Footer;
