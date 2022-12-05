import React from "react";

export default function Form() {
  return (
    <div className="form-window">
      <form>
        <label>Cardholder Name</label>
        <input
          className="form-user-input"
          placeholder="e.g. Jane Appleseed"
          type="text"
        />
        <label>Card Number</label>
        <input
          className="form-input-card-number"
          placeholder="e.g. 1234 5678 9123 0000"
          type="text"
        />
        <div className="form-flex-box">
          <div className="left-box">
            <label className="form-date-text">Exp. Date (MM/YY)</label>
            <div className="left-box-flex">
              <input className="month-input" placeholder="MM" type="text" />
              <input className="year-input" placeholder="YY" type="text" />
            </div>
          </div>
          <div className="right-box">
            <label className="form-cvc-text">CVC</label>
            <input className="cvc-input" placeholder="e.g. 123" type="text" />
          </div>
        </div>
        <button className="submit-btn">Confirm</button>
      </form>
    </div>
  );
}
