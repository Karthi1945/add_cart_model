import React from "react";
import "./Button.css";
const Button = ({ num, click }) => {
  return (
    <button className="ui-change-btn" onClick={() => click(true)}>
      Cart <span>{num}</span> {num <= 1 ? "item" : "items"}
    </button>
  );
};

export default Button;
