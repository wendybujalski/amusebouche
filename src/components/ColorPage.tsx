import React, { ReactNode } from 'react';
import Button from './Button';

interface ColorPageProps {
  backgroundColor: string; // Custom hex color value
  title: string;
  children?: ReactNode;
}

const ColorPage: React.FC<ColorPageProps> = ({
  backgroundColor,
  title,
  children
}) => {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundColor }}
    >
      <main className="flex flex-col items-center justify-center w-full max-w-4xl p-8 text-center text-white text-xl">
        <h1 className="text-4xl font-bold">
          {title}
        </h1>
        {children && <div className="my-6">{children}</div>}
        <Button href="/" size="large">
          Back to Main Page
        </Button>
      </main>
    </div>
  );
};

export default ColorPage;