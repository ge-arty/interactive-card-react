import React from "react";

export default function Front(props) {
  return (
    <div className="front-card">
      <div className="decoration-box">
        <div className="first-circle"></div>
        <div className="second-circle"></div>
      </div>
      <div className="card-info">
        <p className="card-number-value">
          {props.cardNumber == "" ? "0000 0000 0000 0000" : props.cardNumber}
        </p>
        <div className="card-info-owner">
          <p className="owner">
            {props.owner == "" ? "JANE APPLESEED" : props.owner}
          </p>
          <p className="card-date">
            {props.month == "" ? "00" : props.month}/
            {props.year == "" ? "00" : props.year}
          </p>
        </div>
      </div>
    </div>
  );
}
