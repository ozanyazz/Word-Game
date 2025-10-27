export interface Word {
    id: number;
    text: string;
    definition?: string;
    createdAt: Date;
    updatedAt: Date;
}

export class WordModel {
    constructor(public word: Word) {}

    static fromDatabase(data: any): WordModel {
        return new WordModel({
            id: data.id,
            text: data.text,
            definition: data.definition,
            createdAt: new Date(data.created_at),
            updatedAt: new Date(data.updated_at),
        });
    }
}