import React from "react";
import { Link } from "react-router-dom";
import "../../components-style/Button.css";

const STYLES = ["btn--primary", "btn--outline", "btn--test", "btn--form"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  text,
  typeButton,
  onClick,
  buttonStyle,
  buttonSize,
  to,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={typeButton}
    >
      {text}
    </button>
  );
};
