import Link from 'next/link';

export default function Page4() {
  return (
    <div className="flex min-h-screen items-center justify-center" style={{ backgroundColor: '#18FFFF' }}>
      <main className="flex flex-col items-center justify-center w-full max-w-4xl p-8">
        <h1 className="text-4xl font-bold text-black text-center">Page 4</h1>
        <p className="mt-4 text-xl text-black text-center">Bright cyan background</p>
        <Link
          href="/"
          className="mt-6 py-3 px-6 rounded-lg bg-black text-cyan-400 font-bold text-lg transition-all duration-300 hover:scale-105 hover:bg-gray-800"
        >
          Back to Main Page
        </Link>
      </main>
    </div>
  );
}