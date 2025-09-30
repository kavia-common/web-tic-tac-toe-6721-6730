import React from 'react';
import { useGame } from '../context/GameContext';

const ScoreBoard = () => {
  const { gameState } = useGame();
  const { scores, gameMode } = gameState;

  return (
    <div className="score-board">
      <div className="score-item">
        <span className="player">Player X</span>
        <span className="score">{scores.X}</span>
      </div>
      <div className="score-item">
        <span className="player">{gameMode === '2-player' ? 'Player O' : 'Computer'}</span>
        <span className="score">{scores.O}</span>
      </div>
    </div>
  );
};

export default ScoreBoard;
