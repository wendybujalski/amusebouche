import Link from 'next/link';

export default function Page1() {
  return (
    <div className="flex min-h-screen items-center justify-center" style={{ backgroundColor: '#FF5252' }}>
      <main className="flex flex-col items-center justify-center w-full max-w-4xl p-8">
        <h1 className="text-4xl font-bold text-white text-center">Page 1</h1>
        <p className="mt-4 text-xl text-white text-center">Bright red background</p>
        <Link
          href="/"
          className="mt-6 py-3 px-6 rounded-lg bg-white text-red-600 font-bold text-lg transition-all duration-300 hover:scale-105 hover:bg-gray-200"
        >
          Back to Main Page
        </Link>
      </main>
    </div>
  );
}