"use client";

interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

export default function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button
      className="w-20 h-20 border border-black flex items-center justify-center text-3xl text-black font-bold bg-white hover:bg-blue-500 focus:outline-none cursor-pointer"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
