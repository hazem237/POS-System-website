import React from "react";
import "../../components-style/Button.css";



export const Button = ({
  text,
  typeButton,
  onClick,
  buttonStyle,
  buttonSize,
  disable,
}) => {
  return (
    <button
      className={`btn ${buttonStyle}`}
      onClick={onClick}
      type={typeButton}
      disabled={disable}
    >
      {text}
    </button>
  );
};
