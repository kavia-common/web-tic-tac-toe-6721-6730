import React from 'react';
import { useGame } from '../context/GameContext';

const Controls = () => {
  const { gameState, resetGame, resetScores, toggleGameMode } = useGame();
  
  return (
    <div className="controls">
      <button onClick={resetGame} className="control-btn">
        New Game
      </button>
      <button onClick={resetScores} className="control-btn">
        Reset Scores
      </button>
      <button onClick={toggleGameMode} className="control-btn mode-btn">
        {gameState.gameMode === '2-player' ? 'Play vs Computer' : 'Play vs Friend'}
      </button>
    </div>
  );
};

export default Controls;
