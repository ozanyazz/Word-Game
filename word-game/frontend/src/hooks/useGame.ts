import { useState, useEffect } from 'react';

const useGame = () => {
    const [word, setWord] = useState('');
    const [guesses, setGuesses] = useState<string[]>([]);
    const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');

    useEffect(() => {
        // Fetch a random word from the backend or any other source
        const fetchWord = async () => {
            const response = await fetch('/api/word');
            const data = await response.json();
            setWord(data.word);
        };

        fetchWord();
    }, []);

    const makeGuess = (letter: string) => {
        if (!guesses.includes(letter)) {
            setGuesses([...guesses, letter]);
            if (!word.includes(letter)) {
                // Handle incorrect guess logic
            }
            // Check if the game is won or lost
        }
    };

    return {
        word,
        guesses,
        gameStatus,
        makeGuess,
    };
};

export default useGame;