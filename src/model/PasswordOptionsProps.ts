export interface PasswordOptionsProps {
    length: number,
    uppercase: boolean,
    lowercase: boolean,
    numbers: boolean,
    symbols: boolean,
    bad: boolean,
    doubtful: boolean,
    avoidedChars: string,
} 