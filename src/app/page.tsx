import MainPageButton from '@/components/MainPageButton';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans">
      <main className="flex flex-col gap-8 w-full max-w-2xl">
        <h1 className="sm:text-8xl text-6xl font-bold mb-0 text-center text-white font-fancy">amuse-bouche</h1>
        <MainPageButton href="/tictactoe">Tic Tac Toe</MainPageButton>
        <MainPageButton href="/page2">Page 2</MainPageButton>
        <MainPageButton href="/page3">Page 3</MainPageButton>
        <MainPageButton href="/page4">Page 4</MainPageButton>
        <MainPageButton href="/page5">Page 5</MainPageButton>
      </main>
    </div>
  );
}

