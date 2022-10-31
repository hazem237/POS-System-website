import React from "react";
import "../../components-style/Button.css";

export const Button = ({
  text,
  typeButton,
  onClick,
  buttonStyle,
  buttonSize,
  disable,
  icon
}) => {
  return (
    <button
      className={`btn ${buttonStyle} ${buttonSize}`}
      onClick={onClick}
      type={typeButton}
      disabled={disable}
    >
      {text} {icon}
    </button>
  );
};
