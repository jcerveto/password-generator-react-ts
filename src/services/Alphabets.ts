export const ALPH_LOWER = 'abcdefghijklmnopqrstuvwxyz';
export const ALPH_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const NUMBERS = '0123456789';
export const SPECIAL_CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?';
export const BAD_CHARS = '"`~\\/';
export const DOUBTFUL_CHARS = 'il1Lo0O';

export function getAll(): string {
    return ALPH_LOWER + ALPH_UPPER + NUMBERS + SPECIAL_CHARS;
}