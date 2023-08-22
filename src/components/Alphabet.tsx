import { AlphabetProps} from '../model/AlphabetProps'

export const Alhabet = (
    { props }: { props: AlphabetProps }
) => {

``
    return (
        <div>
            {props.characters.split('').map((character, index) => {
                return (
                    <div key={index}>
                        <label>
                            {character}
                        </label>
                    </div>

                )
            })
            }
        </div>
    )
}