import { Letter } from "../model/Letter";


export const handleUppercase = (
    setUppercase: (_currentStatus: boolean) => void, 
    currentStatus: boolean
): void => {
    setUppercase(!currentStatus);
}

export const handleLowercase = (
    setLowercase: (_currentStatus: boolean) => void,
    currentStatus: boolean
): void => {
    setLowercase(!currentStatus);
}

export const handleNumbers = (
    setNumbers: (_currentStatus: boolean) => void,
    currentStatus: boolean
): void => {
    setNumbers(!currentStatus);
}

export const handleSymbols = (
    setSymbols: (_currentStatus: boolean) => void,
    currentStatus: boolean
): void => {
    setSymbols(!currentStatus);
}

export const handleLength = (
    setLength: (_currentLength: number) => void,
    currentLength: number
): void => {
    setLength(currentLength);
}

export const handleBad = (
    setBad: (newStatus: boolean) => void,
    currentStatus: boolean
): void => {
    setBad(!currentStatus);
}

export const handleDoubtful = (
    setDoubtful: (newStatus: boolean) => void,
    currentStatus: boolean
): void => {
    setDoubtful(!currentStatus);
}

export const handleAvoidedChars = (
    setAvoidedChars: (newChars: string) => void,
    currentChars: string
): void => {
    setAvoidedChars(currentChars);
}

export const handleMarkedLetters = (
    setMarkedLetters: (newMarkedLetters: Array<string>) => void,
    markedLetters: Array<string>,
    letter: string,
): void => {
    console.log("letter: ", letter, " markedLetters: ", markedLetters);
    if (markedLetters.includes(letter)) {
        setMarkedLetters(markedLetters.filter((markedLetter) => markedLetter !== letter));
    } else {
        setMarkedLetters([...markedLetters, letter]);
    }

}

export const handleLetters = (
    setLetters: (newLetters: Array<Letter>) => void,
    letters: Array<Letter>,
    letter: Letter,
): void => {
    if (letters.includes(letter)) {
        setLetters(
            letters.map((currentLetter) => {
                if (currentLetter.equals(letter)) {
                    currentLetter.setIsAvoided(!currentLetter.getIsAvoided());
                }
                return currentLetter;
            })
        );
    }
}