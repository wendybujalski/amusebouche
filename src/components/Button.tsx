import Link from 'next/link';
import React from 'react';

type ButtonSize = 'small' | 'large';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  size?: ButtonSize;
}

export default function Button({ href, onClick, children, size = 'small' }: ButtonProps) {
  // Define size classes
  const sizeClasses = size === 'small'
    ? 'py-1 px-3 text-base'
    : 'py-3 px-6 text-lg';

  const baseClasses = `rounded-lg bg-black text-white font-bold transition-all duration-300 hover:scale-105 hover:bg-gray-800 cursor-pointer`;
  const combinedClasses = `${sizeClasses} ${baseClasses}`;

  if (href !== undefined) {
    return (
      <Link
        href={href}
        className={combinedClasses}
      >
        {children}
      </Link>
    );
  } else if (onClick !== undefined) {
    return (
      <button
        onClick={onClick}
        className={combinedClasses}
      >
        {children}
      </button>
    );
  } else {
    // If neither href nor onClick is provided, render a disabled button
    return (
      <button
        disabled
        className={`${sizeClasses} rounded-lg bg-gray-400 text-white font-bold opacity-50 cursor-not-allowed`}
      >
        {children}
      </button>
    );
  }
}