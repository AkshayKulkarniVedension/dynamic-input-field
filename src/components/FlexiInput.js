import React, { useState } from "react";

function FlexiInput({ inputProps }) {
  const inputType = inputProps.inputType;

  const [input, setInput] = useState(null);

  function onChangeHandler(e) {
    setInput(e.target.value);
  }

  if (inputProps.regex) {
  }

  if (inputType == "text") {
    return (
      <div>
        <h3>input field for {inputType} </h3>
        <label htmlFor="textInput"></label>
        {inputProps.scenario == "create" && (
          <input
            className={inputProps.inputStyle}
            type={inputType}
            placeholder={inputProps.inputPlaceholder}
            name="textInput"
            disabled={inputProps.disabled}
            required={inputProps.required}
            onChange={(e) => onChangeHandler(e)}
          />
        )}
        {inputProps.scenario == "edit" && (
          <input
            type={inputType}
            placeholder={inputProps.inputPlaceholder}
            name="textInput"
            disabled={inputProps.disabled}
            required={inputProps.required}
            value={input}
            onChange={(e) => onChangeHandler(e)}
          />
        )}
        {inputProps.scenario == "disable" && (
          <input
            type={inputType}
            placeholder={input}
            name="textInput"
            disabled={inputProps.disabled}
            required={inputProps.required}
            value={input}
            onChange={(e) => onChangeHandler(e)}
          />
        )}
      </div>
    );
  }
}

export default FlexiInput;
