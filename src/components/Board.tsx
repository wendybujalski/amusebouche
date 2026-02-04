'use client';

import Square from './Square';

interface BoardProps {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (squares: (string | null)[]) => void;
}

export default function Board({ xIsNext, squares, onPlay }: BoardProps) {
  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="mb-4 text-xl font-semibold text-center">{status}</div>
      <div className="grid grid-cols-3 gap-0 border-2 border-black rounded">
        {[0, 1, 2].map(row => (
          <div key={row} className="grid grid-cols-1">
            {[0, 1, 2].map(col => {
              const index = row * 3 + col;
              return (
                <Square
                  key={index}
                  value={squares[index]}
                  onSquareClick={() => handleClick(index)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}

function calculateWinner(squares: (string | null)[]): string | null {
  const lines = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal
    [2, 4, 6], // diagonal
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}