import React from "react";
export default function Form(props) {
  return (
    <div className="form-window">
      <form onSubmit={props.handleClick}>
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
          maxLength="16"
          className="form-input-card-number"
          placeholder="e.g. 1234 5678 9123 0000"
          type="text"
        />
        <p>Can't be blanked</p>
        <div className="form-flex-box">
          <div className="left-box">
            <label className="form-date-text">Exp. Date (MM/YY)</label>
            <div className="left-box-flex">
              <input
                onChange={props.monthChange}
                className="month-input"
                maxLength="2"
                placeholder="MM"
                type="text"
              />
              <input
                onChange={props.yearChange}
                className="year-input"
                maxLength="2"
                placeholder="YY"
                type="text"
                value={props.value}
              />
            </div>
            <p>Can't be blanked</p>
          </div>
          <div className="right-box">
            <label className="form-cvc-text">CVC</label>
            <input
              onChange={props.cvcChange}
              maxLength="3"
              className="cvc-input"
              placeholder="e.g. 123"
              type="text"
            />
            <p>Can't be blanked</p>
          </div>
        </div>
        <button type="submit" className="submit-btn">
          Confirm
        </button>
      </form>
    </div>
  );
}
