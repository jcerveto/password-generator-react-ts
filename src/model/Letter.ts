export class Letter {
    constructor(
        private letter: string,
        private isAvoided: boolean,
    ) {
        if (letter.length > 1) {
            throw new Error('Letter must be a single character.');
        }

        this.letter = letter;
        this.isAvoided = isAvoided;
    }

    public getLetter(): string {
        return this.letter;
    }

    public getIsAvoided(): boolean {
        return this.isAvoided;
    }

    public setIsAvoided(newStatus: boolean): void {
        this.isAvoided = newStatus;
    }

    public toString(): string {
        return `${this.letter}: ${this.isAvoided}`;
    }
}
