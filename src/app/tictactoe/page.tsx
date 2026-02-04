import ColorPage from '@/src/components/ColorPage';
import TicTacToe from '@/src/components/TicTacToe';

export default function TicTacToePage() {
  return (
    <ColorPage
      backgroundColor="#FF5252"
      title="Tic Tac Toe"
    >
      <TicTacToe />
    </ColorPage>
  );
}