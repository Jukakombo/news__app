import React from "react";
import { useState } from "react";

function RegisterInput(props) {
  const [focused, setFocused] = useState(false);
  const { id, label, onChange, errorMessage, ...inputProps } = props;
  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <div className="registration__form">
      <label htmlFor={id}>{label}</label>

      <input
        id={id}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
      />

      <span className="errorMessage">{errorMessage}</span>
    </div>
  );
}

export default RegisterInput;
