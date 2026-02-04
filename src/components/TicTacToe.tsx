'use client';

import { useState } from 'react';
import Board from './Board';
import Button from './Button';

export default function TicTacToe() {
  const [history, setHistory] = useState<Array<(string | null)[]>>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: (string | null)[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <Button
          onClick={() => jumpTo(move)}
        >
          {description}
        </Button>
      </li>
    );
  });

  return (
    <div className="flex flex-col items-center">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Game History:</h3>
        <ol className="flex flex-wrap gap-2">{moves}</ol>
      </div>
    </div>
  );
}