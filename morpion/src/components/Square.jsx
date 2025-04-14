import React from "react";

const Square = ({ value, onClick, isWinning }) => {
  return (
    <li
      className={`w-[100px] h-[100px] p-6 rounded-xl border-2 flex justify-center items-center text-3xl cursor-pointer 
      ${isWinning ? "border-green-500" : "border-white"}`}
      onClick={onClick}
    >
      {value}
    </li>
  );
};

export default Square;
