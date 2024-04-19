import logo from "./logo.svg";
import "./App.css";
import FlexiInput from "./components/FlexiInput";

let inputProp = {
  inputType: "text",
  inputStyle: null,
  inputTitle: null,
  scenario: "create",
  inputPlaceholder: null,

  errorMessage: "",
  error: false,
};

function App() {
  return (
    <div className="App">
      <FlexiInput inputProps={inputProp}></FlexiInput>
    </div>
  );
}

export default App;
