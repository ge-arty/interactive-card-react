import React from "react";

export default function Front() {
  return (
    <div className="front-card">
      <div className="decoration-box">
        <div className="first-circle"></div>
        <div className="second-circle"></div>
      </div>
      <div className="card-info">
        <p className="card-number-value">00000000000000</p>
        <div className="card-info-owner">
          <p className="owner">0000000000</p>
          <p className="card-date">000000</p>
        </div>
      </div>
    </div>
  );
}
