import React from "react";
import icon from "../img/submited.png";

export default function Thanks(props) {
  return (
    <div className="registred-container">
      <div className="registred-box">
        <img src={icon} alt="icon" />
        <h2 className="registred-title">THANK YOU!</h2>
        <p className="registred-text">We’ve added your card details</p>
        <button onClick={props.click} className="submit-btn">
          Continue
        </button>
      </div>
    </div>
  );
}
