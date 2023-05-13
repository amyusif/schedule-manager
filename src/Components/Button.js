import React from "react";

const Button = ({ name, icon, type }) => {
  return (
      <button class="btn" href="/" type={type}>
        {name} {icon}
      </button>
  
  );
};

export default Button;
