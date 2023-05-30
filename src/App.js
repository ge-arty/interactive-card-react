import "./reset/reset.css";
import "./App.css";
import Front from "./components/Front";
import Back from "./components/Back";
import Form from "./components/Form";
import { useState } from "react";
import Thanks from "./components/Thanks";

// asdasdasdasdbassauiabsdiasbndiuasbd

function App() {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [owner, setOwner] = useState("JANE APPLESEED");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");
  const [cvc, setCvc] = useState("000");
  const [submited, setSubmited] = useState(false);
  function ownerChange(event) {
    setOwner(event.target.value.toUpperCase());
  }
  function numberChange(e) {
    let val = e.target.value;
    let str = val.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ");
    setCardNumber(str.trim());
  }
  function cvcChange(e) {
    setCvc(e.target.value);
  }
  function yearChange(e) {
    if (e.target.value < 22) {
      setYear(22);
    } else {
      setYear(e.target.value);
    }
  }
  function monthChange(e) {
    if (e.target.value > 12) {
      setMonth(12);
    } else {
      setMonth(e.target.value);
    }
  }
  function handleClick() {
    setSubmited(true);
  }
  return (
    <div className="app">
      <div className="background-box"></div>
      <Front year={year} month={month} owner={owner} cardNumber={cardNumber} />
      <Back cvc={cvc} />
      {submited == false ? (
        <Form
          handleClick={() => handleClick()}
          yearChange={yearChange}
          monthChange={monthChange}
          cvcChange={cvcChange}
          numberChange={numberChange}
          ownerChange={ownerChange}
        />
      ) : (
        <Thanks click={() => setSubmited(false)} />
      )}
    </div>
  );
}

export default App;
