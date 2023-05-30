import React from "react";
import { Link } from "react-router-dom";
import hero_image_back from "../../assets/hero_image_back.png";
import transport1 from "../../assets/transport1.jpg"
import transport2 from "../../assets/transport2.jpg"
import transport3 from "../../assets/transport3.jpg"
import "./hero.css";
import Header from "../header/Header";
import About from "../about/About";
const Hero = () => {
  return (
    <div>
      <div className="hero">
        
        <div className="left_div">
          <div className="hero_text">
            <div>
              <span>Content fleet management </span>
            </div>
            <div>
              <span>Content fleet</span>
            </div>
            <div>
              <span>
                TransportSimple has been built with a vision <br/>to revolutionise
                the logistics industry <br/> globally. It is the perfect one one-stop
                fleet <br/>management solution suitable for all the fleet sizes.
              </span>
            </div>
          </div>
          <div className="hero_btn">
            <button className="btn">Get started</button>
            <button className="btn">Contact us</button>
          </div>
        </div>
        <div className="right_div">
         
          <img src={transport1} className="image1" />
          <img src={transport2} className="image2" />
          <img src={transport3} className="image3" />
          <img src={transport1} className="image4" />
          <img src={transport2} className="image5" />
          <img src={transport3} className="image6" />
        </div>
      </div>
      <About/>
    </div>
  );
};

export default Hero;
