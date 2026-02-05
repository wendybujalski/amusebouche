import ColorPage from '@/components/ColorPage';
import TicTacToe from '@/components/TicTacToe';

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