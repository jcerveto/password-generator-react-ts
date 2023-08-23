import { Letter } from "./Letter"


export interface AlphabetProps {
    characters: string,

    letters: Array<Letter>,
    setLetters: (newLetters: Array<Letter>) => void,
    handleLetters: (handleLetters: (newLetters: Array<Letter>) => void, letters: Array<Letter>, letter: Letter) => void,

}