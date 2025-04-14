import React from "react";

const Square = ({ value, onClick }) => {
  // value: "X" | "O" | ""

  return (
    <div
      className="w-[100px] h-[100px] p-6 rounded-xl border-white border justify-center items-center flex text-3xl"
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default Square;
