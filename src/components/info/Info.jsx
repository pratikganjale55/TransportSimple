import React from "react";
import "./info.css";
import trust from "../../assets/trust.jpg";
import customer_support from "../../assets/customer support.jpg";
import developer from "../../assets/developer.jpg";
import industry from "../../assets/industry export.jpg";
import investor from "../../assets/investor.jpg";
import mentor1 from "../../assets/mentor1.jpg";
import investor1 from "../../assets/investor1.png";
const Info = () => {
  return (
    <div>
      <div className="info_parent">
        <div className="info_top">
          <p>
            BENEFITS OF WORKING WITH <span>US</span>
          </p>
        </div>
        <div className="info_bottom">
          <div className="info_flex_container">
            <div className="info_item">
              <img src={industry} alt="industry" />
              <p>Industry Exports</p>
            </div>
            <div className="info_item">
              <img src={developer} alt="developer" />
              <p>Top notch Developers</p>
            </div>
            <div className="info_item">
              <img src={customer_support} alt="customer_support" />
              <p>Full custome support team</p>
            </div>
            <div className="info_item">
              <img src={trust} alt="trust" />
              <p>Trustworthy and realiable</p>
            </div>
          </div>
        </div>
      </div>

      {/* // investor // */}
      <div className="investor_parent">
        <div className="info_top">
          <p>
            OUR <span>INVESTOR</span>
          </p>
        </div>
        <div className="inves_bottom">
          <div className="inves_flex_container">
            <div className="inves_item">
              <img src={investor} alt="investor" />
            </div>
            <div className="inves_item">
              <img src={investor} alt="investor" />
            </div>
            <div className="inves_item">
              <img src={investor} alt="investor" />
            </div>
            <div className="inves_item">
              <img src={investor} alt="investor" />
            </div>
          </div>
        </div>
      </div>

       {/* mentor  */}
       <div className="mentor_parent">
        <div className="info_top">
          <p>
            OUR <span>MENTOR</span>
          </p>
        </div>
        <div className="mento_bottom">
          <div className="mento_flex_container">
            <div className="mento_item">
              <img src={mentor1} alt="mentor" />
            </div>
            <div className="mento_item">
              <img src={investor1} alt="mentor" />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
