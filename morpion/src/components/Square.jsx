import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <li
      className="w-[100px] h-[100px] p-6 rounded-xl border-white border justify-center items-center flex text-3xl"
      onClick={onClick}
    >
      {value}
    </li>
  );
};

export default Square;
