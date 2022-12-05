import React from "react";

export default function Back(props) {
  return (
    <div className="back-card">
      <div className="black-decoration"></div>
      <div className="back-card-cvc-box">
        <p className="back-card-cvc">{props.cvc}</p>
      </div>
      <div className="gray-decoration"></div>
    </div>
  );
}
