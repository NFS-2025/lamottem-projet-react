import React, { useState } from "react";
import Square from "./square";

const AllSquares = [
  { id: 1, value: "" },
  { id: 2, value: "" },
  { id: 3, value: "" },
  { id: 4, value: "" },
  { id: 5, value: "" },
  { id: 6, value: "" },
  { id: 7, value: "" },
  { id: 8, value: "" },
  { id: 9, value: "" },
];

const Grille = () => {
  const [squares, setSquares] = useState(AllSquares);

  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (id) => {
    if (squares.find((square) => square.id === id).value !== "") {
      return;
    }

    const currentPlayer = isXNext ? "X" : "O";

    setSquares(
      squares.map((square) =>
        square.id === id ? { ...square, value: currentPlayer } : square
      )
    );

    setIsXNext(!isXNext);
  };

  return (
    <ul className="grid grid-cols-3 gap-2">
      {squares.map((square) => (
        <Square
          key={square.id}
          value={square.value}
          onClick={() => handleClick(square.id)}
        />
      ))}
    </ul>
  );
};

export default Grille;
