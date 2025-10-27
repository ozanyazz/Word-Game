import React from 'react';
import Board from '../components/Board';
import Keyboard from '../components/Keyboard';
import { useGame } from '../hooks/useGame';

const Game: React.FC = () => {
    const { gameState, handleInput, resetGame } = useGame();

    return (
        <div className="game-container">
            <h1>Word Game</h1>
            <Board state={gameState} />
            <Keyboard onInput={handleInput} />
            <button onClick={resetGame}>Reset Game</button>
        </div>
    );
};

export default Game;