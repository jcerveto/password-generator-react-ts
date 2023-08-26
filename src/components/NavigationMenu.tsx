import { useState } from "react"

import "../styles/NavigationMenu.css"

import * as Measures from "../services/Measures"

import { NavigationMenuProps } from "../model/NavigationMenuProps"

export const NavigationMenu = ( { props }: { props: NavigationMenuProps } ) => {    
    const [showCopyToClipboardMessage, setShowCopyToClipboardMessage] = useState<boolean>(false);

    const handleCopyToClipboard = () => {
        props.copyToClipboard();
        setShowCopyToClipboardMessage(true);
        setTimeout(() => {
            setShowCopyToClipboardMessage(false);
        }, 10_000);
    }

    return (
        <nav className="navigationMenu-container">
            <header className="navigationMenu-container-header">
                Customize your password:
            </header>

            <main className="navigationMenu-options-container">
                <section className="navigationMenu-length-container">
                    <label>
                        Password length:  
                    </label>
                    <input 
                        className="navigationMenu-length"
                        type="number"
                        min={Measures.MIN_LENGTH}
                        max={Measures.MAX_LENGTH}
                        value={props.length}
                        onChange={ (event) => props.handleLength(props.setLength, Number(event.target.value)) }
                    />
                    <input 
                        className="navigationMenu-length"
                        type="range"
                        min={Measures.MIN_LENGTH}
                        max={Measures.MAX_LENGTH}
                        value={props.length}
                        onChange={ (event) => props.handleLength(props.setLength, Number(event.target.value)) }
                    />
                </section>

                <aside>
                    <div className="navigationMenu-option">
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
                    </div>

                    <div className="navigationMenu-option">
                        <input
                            type="checkbox"
                            checked={props.bad}
                            onChange={ () => props.handleBad(props.setBad, props.bad) }
                        />
                        <label>
                            Bad
                        </label>
                        <input
                            type="checkbox"
                            checked={props.doubtful}
                            onChange={ () => props.handleDoubtful(props.setDoubtful, props.doubtful) }
                        />
                        <label>
                            Doubtful
                        </label>
                    </div>

                </aside>
            </main>



            <footer className="navigationMenu-footer-container">
                <button
                    onClick={props.refresh}
                >
                    New Password
                </button>
                
                <button
                    onClick={handleCopyToClipboard}
                >
                    Copy Password
                </button>
                { showCopyToClipboardMessage
                    ? 
                        <span className="navigationMenu-footer-confirmationMessage">
                            Copied to clipboard
                        </span>
                    : null
                }
            </footer>


        </nav>
    )
}