import { Word } from '../models/word';

export class GameService {
    private words: Word[];

    constructor() {
        this.words = [];
    }

    public addWord(word: Word): void {
        this.words.push(word);
    }

    public getWords(): Word[] {
        return this.words;
    }

    public findWord(word: string): Word | undefined {
        return this.words.find(w => w.text === word);
    }

    public removeWord(word: string): void {
        this.words = this.words.filter(w => w.text !== word);
    }
}