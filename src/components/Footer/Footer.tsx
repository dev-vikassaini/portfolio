import React from "react";
import "./Footer.css";
import Wave from "../../assets/img/wave.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>dev.vikassaini@gamil.com</span>
        <div className="f-icons">
          
        </div>
      </div>
    </div>
  );
};

export default Footer