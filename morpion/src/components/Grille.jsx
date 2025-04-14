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

const winningCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const Grille = () => {
  const [squares, setSquares] = useState(AllSquares);
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  const [winningSquares, setWinningSquares] = useState([]);

  const handleClick = (id) => {
    if (winner || isDraw || squares.find((s) => s.id === id).value !== "") {
      return;
    }

    const currentPlayer = isXNext ? "X" : "O";

    const newSquares = squares.map((square) =>
      square.id === id ? { ...square, value: currentPlayer } : square
    );

    const win = calculateWinner(newSquares);
    if (win) {
      setSquares(newSquares);
      setWinner(win.player);
      setWinningSquares(win.combo);
      return;
    }

    const allFilled = newSquares.every((s) => s.value !== "");
    if (allFilled) {
      setIsDraw(true);
    }

    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const calculateWinner = (squares) => {
    for (const [a, b, c] of winningCombos) {
      const valA = squares.find((s) => s.id === a).value;
      const valB = squares.find((s) => s.id === b).value;
      const valC = squares.find((s) => s.id === c).value;
      if (valA && valA === valB && valA === valC) {
        return { player: valA, combo: [a, b, c] };
      }
    }
    return null;
  };

  return (
    <ul className="grid grid-cols-3 gap-2">
      <li className="col-span-3 text-center mb-4 text-lg font-semibold">
        {winner
          ? `Le joueur ${winner} a gagné !`
          : isDraw
          ? "Match nul !"
          : `C'est le tour du joueur ${isXNext ? "X" : "O"}`}
      </li>
      {squares.map((square) => (
        <Square
          key={square.id}
          value={square.value}
          onClick={() => handleClick(square.id)}
          isWinning={winningSquares.includes(square.id)}
        />
      ))}
      <li className="col-span-3 text-center mb-4 text-lg font-semibold mt-5">
        <button
          className="w-full"
          onClick={() => {
            setSquares(AllSquares);
            setIsXNext(true);
            setWinner(null);
            setIsDraw(false);
            setWinningSquares([]);
          }}
        >
          reset
        </button>
      </li>
    </ul>
  );
};

export default Grille;
