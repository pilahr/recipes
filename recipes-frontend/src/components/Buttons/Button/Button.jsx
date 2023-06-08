import React from "react";
import "./Button.scss";

const Button = ({ func, buttonText, onClick }) => {
  let buttonStyle = "btn";

  switch (func) {
    case "update":
      buttonStyle += " update";
      break;
    case "delete":
      buttonStyle += " delete";
      break;
    case "create":
      buttonStyle += " create";
      break;
    default:
      buttonStyle = buttonStyle;
  }

  return (
    <div>
      <button className={buttonStyle} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
