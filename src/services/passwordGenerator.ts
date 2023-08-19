import { PasswordOptionsProps } from "../model/PasswordOptionsProps";

const ALPH_LOWER = 'abcdefghijklmnopqrstuvwxyz';
const ALPH_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBERS = '0123456789';
const SPECIAL_CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?';


/**
 * Generate a password based on the given options. 
 * Create a new password until it contains at least one character from each selected character set.
 * @param props: PasswordOptionsProps
 * @returns password: string
 */
export function generatePassword(
    props: PasswordOptionsProps
): string {

    let password: string = '';
    const alphabet: string = getAlphabet(props);

    do {
        password = '';
        for (let i = 0; i < props.length; i++) {
            const index = Math.floor(Math.random() * alphabet.length);
            password += alphabet[index];
        }

        console.log('alphabet: ' + alphabet);
        console.log('password: ' + password);

    } while (
        (props.uppercase && !containsUppercase(password)) ||
        (props.lowercase && !containsLowercase(password)) ||
        (props.numbers && !containsNumbers(password)) ||
        (props.symbols && !containsSymbols(password))
    );

    return password;
}


export function containsUppercase(password: string): boolean {
    for (let i = 0; i < password.length; i++) {
        if (ALPH_UPPER.includes(password[i])) {
            return true;
        }
    }
    return false;
}

export function containsLowercase(password: string): boolean {
    for (let i = 0; i < password.length; i++) {
        if (ALPH_LOWER.includes(password[i])) {
            return true;
        }
    }
    return false;
}

export function containsNumbers(password: string): boolean {
    for (let i = 0; i < password.length; i++) {
        if (NUMBERS.includes(password[i])) {
            return true;
        }
    }
    return false;
}

export function containsSymbols(password: string): boolean {
    for (let i = 0; i < password.length; i++) {
        if (SPECIAL_CHARS.includes(password[i])) {
            return true;
        }
    }
    return false;
}

export function getAlphabet(options: PasswordOptionsProps): string {
    let alphabet = '';

    if (options.lowercase) {
        alphabet += ALPH_LOWER;
    }
    if (options.uppercase) {
        alphabet += ALPH_UPPER;
    }
    if (options.numbers) {
        alphabet += NUMBERS;
    }
    if (options.symbols) {
        alphabet += SPECIAL_CHARS;
    }

    return alphabet;
}
