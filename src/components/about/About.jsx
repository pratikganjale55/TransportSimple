import React from "react";
import "./about.css";
import labour from "../../assets/labour.jpg";
import transportLogo from "../../assets/transport logo.jpg"
const About = () => {
  return (
    <div>
      <div className="container">
        <div className="left_div_about">
          <div className="about_content">
            <div className="about_title_top">
              <span className="about_title1">
                Know about{" "}
                <span style={{ color: "#9CCBFD" }}>TransportSimple</span>
              </span>
              <br />

              <span className="about_title2">
                At our company we specialize <br /> in providing compreshensive
              </span>
            </div>
            <div className="about_title_bottom">
              <span>
                TransportSimple has been built with a vision to revolutionise
                the logistics industry globally. It is the perfect one-stop
                fleet management solution suitable for all fleet sizes. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nostrum eaque sit vero, excepturi minima ipsa ab facilis optio.
                Esse facere corporis explicabo, earum vitae sapiente. Provident
                nulla nostrum harum!
              </span>
            </div>
          </div>
        </div>
        <div className="right_div_about">
          <img src={labour} className="about_image_back" />
          <div className="transport">
            <div>
                <img src={transportLogo}/>
              <span> 135400</span>
              <span>Vehicles</span>
            </div>
            <span></span>
            <div>
            <img src={transportLogo}/>
              <span> 135400</span>
              <span>Vehicles</span>
            </div>
            <span></span>
            <div>
            <img src={transportLogo}/>
              <span> 135400</span>
              <span>Vehicles</span>
            </div>
            <span></span>
            <div>
            <img src={transportLogo}/>
              <span> 135400</span>
              <span>Vehicles</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
