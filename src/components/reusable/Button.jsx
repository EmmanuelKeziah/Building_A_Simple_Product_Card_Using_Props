import React from "react";

const Button = ({ label }) => {
  return (
    <div>
      <button className="flex bg-[#1D3D66] text-white font-bold rounded py-2 px-4">
        {label}
      </button>
    </div>
  );
};

export default Button;
