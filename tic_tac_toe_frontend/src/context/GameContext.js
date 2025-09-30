import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState({
    board: Array(9).fill(null),
    isXNext: true,
    winner: null,
    scores: { X: 0, O: 0 },
    gameMode: '2-player', // '2-player' or 'computer'
  });

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const makeComputerMove = (currentBoard) => {
    // Check for winning move
    for (let i = 0; i < 9; i++) {
      if (!currentBoard[i]) {
        const testBoard = [...currentBoard];
        testBoard[i] = 'O';
        if (calculateWinner(testBoard) === 'O') {
          return i;
        }
      }
    }

    // Check for blocking move
    for (let i = 0; i < 9; i++) {
      if (!currentBoard[i]) {
        const testBoard = [...currentBoard];
        testBoard[i] = 'X';
        if (calculateWinner(testBoard) === 'X') {
          return i;
        }
      }
    }

    // Random move if no winning or blocking move
    const emptySquares = currentBoard
      .map((square, index) => !square ? index : null)
      .filter(val => val !== null);
    
    return emptySquares[Math.floor(Math.random() * emptySquares.length)];
  };

  const handleMove = (index) => {
    if (gameState.board[index] || gameState.winner) return;

    const newBoard = [...gameState.board];
    const currentPlayer = gameState.isXNext ? 'X' : 'O';
    newBoard[index] = currentPlayer;

    const winner = calculateWinner(newBoard);
    
    if (winner) {
      setGameState(prev => ({
        ...prev,
        board: newBoard,
        winner,
        scores: {
          ...prev.scores,
          [winner]: prev.scores[winner] + 1
        }
      }));
      return;
    }

    const isDraw = newBoard.every(square => square !== null);
    if (isDraw) {
      setGameState(prev => ({
        ...prev,
        board: newBoard,
        winner: 'draw'
      }));
      return;
    }

    const nextState = {
      ...gameState,
      board: newBoard,
      isXNext: !gameState.isXNext
    };

    setGameState(nextState);

    // Computer's turn
    if (gameState.gameMode === 'computer' && !gameState.isXNext) {
      setTimeout(() => {
        const computerMove = makeComputerMove(newBoard);
        handleMove(computerMove);
      }, 500);
    }
  };

  const resetGame = () => {
    setGameState(prev => ({
      ...prev,
      board: Array(9).fill(null),
      isXNext: true,
      winner: null
    }));
  };

  const resetScores = () => {
    setGameState(prev => ({
      ...prev,
      scores: { X: 0, O: 0 }
    }));
  };

  const toggleGameMode = () => {
    setGameState(prev => ({
      ...prev,
      gameMode: prev.gameMode === '2-player' ? 'computer' : '2-player',
      board: Array(9).fill(null),
      isXNext: true,
      winner: null
    }));
  };

  const value = {
    gameState,
    handleMove,
    resetGame,
    resetScores,
    toggleGameMode
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
