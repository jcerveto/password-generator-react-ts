import { useMemo } from 'react';

import { AlphabetProps } from '../model/AlphabetProps'

import '../styles/Alphabet.css'


export const Alphabet = (
    { props }: { props: AlphabetProps }
) => {
    // Utiliza useMemo para memorizar la lista de letras renderizadas
    const renderedLetters = useMemo(() => {
        return props.letters.map((letter, index) => {
            return (
                <span
                    className={`letter ${! letter.getIsAvoided() ? 'marked' : ''}`}
                    key={index}
                    onClick={() => props.handleLetters(props.setLetters, props.letters, letter)}
                >
                    {letter.getLetter()}
                </span>
            )
        });
    }, [props.letters]); // La dependencia es props.letters

    return (
        <div className='alphabet-container'>
            <section>
                <div className='alphabet-title'>
                    Available letters:
                </div>
                <div className='alphabet-description'>
                    Press a letter to select or unselect available letters.
                </div>
            </section>

            <div className='letter-container'>
                {renderedLetters}
            </div>
        </div>
    )
}
