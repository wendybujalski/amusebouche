import Link from 'next/link';
import React from 'react';

interface ColorPageProps {
  backgroundColor: string; // Custom hex color value
  title: string;
  text: string;
}

const ColorPage: React.FC<ColorPageProps> = ({
  backgroundColor,
  title,
  text
}) => {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundColor }}
    >
      <main className="flex flex-col items-center justify-center w-full max-w-4xl p-8">
        <h1 className="text-4xl font-bold text-center text-white">
          {title}
        </h1>
        <p className="mt-4 text-xl text-center text-white">
          {text}
        </p>
        <Link
          href="/"
          className="mt-6 py-3 px-6 rounded-lg bg-black text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:bg-gray-800"
        >
          Back to Main Page
        </Link>
      </main>
    </div>
  );
};

export default ColorPage;