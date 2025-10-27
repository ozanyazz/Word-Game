export interface Word {
    id: number;
    text: string;
    definition: string;
}

export interface GameState {
    currentWord: Word | null;
    score: number;
    attempts: number;
    isGameOver: boolean;
}

export interface User {
    id: number;
    username: string;
    score: number;
}