import "./reset/reset.css";
import "./App.css";
import Front from "./components/Front";
import Back from "./components/Back";
import Form from "./components/Form";

function App() {
  return (
    <div className="app">
      <div className="background-box"></div>
      <Front />
      <Back />
      <Form />
    </div>
  );
}

export default App;
