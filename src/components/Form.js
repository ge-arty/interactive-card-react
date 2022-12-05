import React from "react";

export default function Form(props) {
  return (
    <div className="form-window">
      <form>
        <label>Cardholder Name</label>
        <input
          onChange={props.ownerChange}
          className="form-user-input"
          placeholder="e.g. Jane Appleseed"
          type="text"
        />
        <p>Can't be blanked</p>
        <label>Card Number</label>
        <input
          onChange={props.numberChange}
          className="form-input-card-number"
          placeholder="e.g. 1234 5678 9123 0000"
          type="text"
        />
        <p>Can't be blanked</p>
        <div className="form-flex-box">
          <div className="left-box">
            <label className="form-date-text">Exp. Date (MM/YY)</label>
            <div className="left-box-flex">
              <input className="month-input" placeholder="MM" type="text" />
              <input className="year-input" placeholder="YY" type="text" />
            </div>
            <p>Can't be blanked</p>
          </div>
          <div className="right-box">
            <label className="form-cvc-text">CVC</label>
            <input className="cvc-input" placeholder="e.g. 123" type="text" />
            <p>Can't be blanked</p>
          </div>
        </div>
        <button className="submit-btn">Confirm</button>
      </form>
    </div>
  );
}
