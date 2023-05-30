import React from "react";
import "./acheivment.css";
import acheiv4 from "../../assets/acheiv4.jpg";
import acheiv1 from "../../assets/acheiv1.jpg";
import acheiv2 from "../../assets/acheiv2.png";
import acheiv3 from "../../assets/acheiv3.jpg";
import acheiv5 from "../../assets/acheiv5.jpg";
import acheiv6 from "../../assets/acheiv6.jpg";
import acheiv7 from "../../assets/acheiv7.jpg";
import acheiv8 from "../../assets//acheiv8.jpg";

const Acheivment = () => {
  return (
    <>
    <div className="acheivment_container">
      <div className="acheiv_title">
        <p>
          ACHEIVMENT & <span>NEWS</span>
        </p>
      </div>
      <div className="acheiv_grid">
        <div className="acheiv_items1">
          <img src={acheiv4} alt="acheivement" />
          
        </div>
        <div className="acheiv_items2">
          <img src={acheiv1} alt="acheivement" />
        </div>
        <div className="acheiv_items3">
          <img src={acheiv2} alt="acheivement" />
        </div>
        <div className="acheiv_items4">
          <img src={acheiv3} alt="acheivement" />
        </div>
        <div className="acheiv_items5">
          <img src={acheiv5} alt="acheivement" />
        </div>
        <div className="acheiv_items6">
          <img src={acheiv6} alt="acheivement" />
        </div>
        <div className="acheiv_items7">
          <img src={acheiv7} alt="acheivement" />
        </div>
        <div className="acheiv_items8">
          <img src={acheiv8} alt="acheivement" />
        </div>
      </div>
      </div>
    </>
  );
};

export default Acheivment;
