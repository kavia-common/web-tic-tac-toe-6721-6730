import React from 'react';
import { useGame } from './context/GameContext';
import { GameProvider } from './context/GameContext';
import Board from './components/Board';
import ScoreBoard from './components/ScoreBoard';
import Controls from './components/Controls';
import './App.css';

function App() {
  return (
    <GameProvider>
      <div className="App">
        <div className="game-container">
          <ScoreBoard />
          <div className="status">
            <GameStatus />
          </div>
          <Board />
          <Controls />
        </div>
      </div>
    </GameProvider>
  );
}

const GameStatus = () => {
  const { gameState } = useGame();
  const { winner, isXNext, gameMode } = gameState;

  let status;
  if (winner === 'draw') {
    status = "It's a draw!";
  } else if (winner) {
    status = `Winner: ${winner === 'X' ? 'Player X' : (gameMode === '2-player' ? 'Player O' : 'Computer')}`;
  } else {
    status = `Next player: ${isXNext ? 'X' : (gameMode === '2-player' ? 'O' : 'Computer')}`;
  }

  return <div className="game-status">{status}</div>;
};

export default App;
