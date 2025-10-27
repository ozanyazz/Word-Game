import { Request, Response } from 'express';
import { getWords, saveScore } from '../services/gameService';

export const getGameWords = async (req: Request, res: Response) => {
    try {
        const words = await getWords();
        res.status(200).json(words);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving words', error });
    }
};

export const submitScore = async (req: Request, res: Response) => {
    const { score } = req.body;
    try {
        await saveScore(score);
        res.status(201).json({ message: 'Score submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting score', error });
    }
};