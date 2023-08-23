import { AlphabetProps} from '../model/AlphabetProps'

import { getAlphabetTable } from '../services/alphabetUtils'

import '../styles/Alphabet.css'

export const Alhabet = (
    { props }: { props: AlphabetProps }
) => {

``
    return (
        <div>
            {
                getAlphabetTable(props.characters).map((row, index) => (
                    <section key={index}>
                        {
                            row.map((char, index) => (
                                <label key={index}>{char}</label>
                            ))
                        }
                    </section>
                ))
            }
            ESPACIO
            <br />
            <div className='alphabet-container'>
                {
                    props.characters
                        .split('')
                        .map((char, index) => {
                            return (
                                <label 
                                    className='letter'
                                    key={index}
                                >
                                    {char}
                                </label>
                            )
                        })
                }
            </div>

        </div>
    )
}