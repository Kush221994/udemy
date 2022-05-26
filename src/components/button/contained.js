import React from "react";

const ButtonContained = ({ children, ...rest }) => {
  return (
    <button className="btn" {...rest}>
      {children}
    </button>
  );
};

export default ButtonContained;
