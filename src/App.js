import "./reset/reset.css";
import "./App.css";
import Front from "./components/Front";
import Back from "./components/Back";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [owner, setOwner] = useState("JANE APPLESEED");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");
  const [cvc, setCvc] = useState("000");
  function ownerChange(event) {
    setOwner(event.target.value.toUpperCase());
  }
  function numberChange(event) {
    setCardNumber(event.target.value.slice(0, event.target.value.length - 1));
  }

  return (
    <div className="app">
      <div className="background-box"></div>
      <Front year={year} month={month} owner={owner} cardNumber={cardNumber} />
      <Back cvc={cvc} />
      <Form numberChange={numberChange} ownerChange={ownerChange} />
    </div>
  );
}

export default App;
