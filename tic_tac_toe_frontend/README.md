# Tic Tac Toe Game

A modern, responsive Tic Tac Toe web application built with React, featuring both 2-player and computer opponent modes.

## Features

- Two game modes:
  - 2-player mode (play against a friend on the same device)
  - Computer opponent mode (play against AI)
- Score tracking that persists during the session
- Responsive design that works on both desktop and mobile devices
- Modern "Ocean Professional" theme with smooth animations
- Clean and intuitive user interface

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## How to Play

1. Choose your game mode using the mode toggle button at the bottom
2. In 2-player mode:
   - Players take turns placing X's and O's on the board
   - First player is X, second player is O
3. In computer mode:
   - You play as X
   - Computer plays as O
   - Computer will make its move automatically after your turn
4. Score is tracked at the top of the board
5. Use the control buttons to:
   - Start a new game
   - Reset scores
   - Switch game modes

## Design

This app uses the Ocean Professional theme with the following color scheme:
- Primary: #2563EB (Blue)
- Secondary/Success: #F59E0B (Amber)
- Error: #EF4444
- Background: #f9fafb
- Surface: #ffffff
- Text: #111827

The interface features:
- Centered game board
- Score display above
- Game controls below
- Responsive layout for all screen sizes
- Modern styling with subtle shadows and transitions

## Technical Details

Built using:
- React 18
- React Hooks and Context for state management
- CSS3 with modern features (Grid, Flexbox, Variables)
- Responsive design principles
