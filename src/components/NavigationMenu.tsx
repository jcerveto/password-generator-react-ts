import { NavigationMenuProps } from "../model/NavigationMenuProps"

export const NavigationMenu = ( { props }: { props: NavigationMenuProps } ) => {    

    return (
        <nav>
            <strong>
                Personaliza tu contraseña:
            </strong>
            <section>
                <input 
                    type="checkbox"
                    checked={props.uppercase}
                    onChange={ () => props.handleUppercase(props.setUppercase, props.uppercase) }
                />
                <label>
                    Uppercase
                </label>
                <input
                    type="checkbox"
                    checked={props.lowercase}
                    onChange={ () => props.handleLowercase(props.setLowercase, props.lowercase)  }
                />
                <label>
                    Lowercase
                </label>
                <input
                    type="checkbox"
                    checked={props.numbers}
                    onChange={ () => props.handleNumbers(props.setNumbers, props.numbers) }
                />
                <label>
                    Numbers
                </label>
                <input
                    type="checkbox"
                    checked={props.symbols}
                    onChange={ () => props.handleSymbols(props.setSymbols, props.symbols) }
                />
                <label>
                    Symbols
                </label>
                <input 
                    type="range"
                    min="4"
                    max="64"
                    value={props.length}
                    onChange={ (event) => props.handleLength(props.setLength, Number(event.target.value)) }
                />
                <label>
                    Length:  
                </label>
                <input 
                    type="number"
                    min="4"
                    max="64"
                    value={props.length}
                    onChange={ (event) => props.handleLength(props.setLength, Number(event.target.value)) }
                />

            </section>
        </nav>
    )
}