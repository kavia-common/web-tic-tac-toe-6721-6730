import React from 'react';
import { useGame } from '../context/GameContext';
import Square from './Square';

const Board = () => {
  const { gameState, handleMove } = useGame();
  const { board } = gameState;

  return (
    <div className="game-board">
      {board.map((value, index) => (
        <Square 
          key={index} 
          value={value} 
          onClick={() => handleMove(index)}
        />
      ))}
    </div>
  );
};

export default Board;
