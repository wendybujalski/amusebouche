'use client';

import Link from 'next/link';
import { cn as clsx } from 'clsx-for-tailwind';

interface MainPageButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function MainPageButton({ href, children }: MainPageButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "block py-6 px-4 rounded-xl bg-black border-2 border-white text-white text-center font-bold text-xl transition-all duration-300",
        "hover:scale-105 hover:border-[#ff00ff] hover:text-[#ff00ff]"
      )}
    >
      {children}
    </Link>
  );
}