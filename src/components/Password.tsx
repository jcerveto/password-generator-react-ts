import { useState } from "react";

import "../styles/Password.css";

import { PasswordProps } from "../model/PasswordProps";

export const Password = (
        { props } : { props: PasswordProps }
) => {

    const [showCopyToClipboardMessage, setShowCopyToClipboardMessage] = useState<boolean>(false);

    const handleCopyToClipboard = () => {
        props.copyToClipboardFunction();
        setShowCopyToClipboardMessage(true);
        setTimeout(() => {
            setShowCopyToClipboardMessage(false);
        }, 10_000);
    }


    return (
        <div id="main-password">
            <header>
                Password Generator
            </header>


            <section className="password-container" >
                <span className="password">
                    {props.password}
                </span>
                <aside className="password-utils-container">
                    <span className="copy-container">
                        <button
                            className="button-with-image"
                            onClick={handleCopyToClipboard}
                        >
                            <img src="images/copy.svg" alt="Copy" className="buttons-images" />
                        </button>
                        <div>
                            <span>
                                Copy
                            </span>
                            <span>
                                { showCopyToClipboardMessage 
                                    ? 
                                        <span
                                            className="copy-message"
                                        >
                                            <i>Copied to clipboard</i>
                                        </span> 
                                    :   null
                                    }
                            </span>
                        </div>

                    </span>

                    <span className="refresh-container">
                        <button 
                            className="button-with-image"
                            onClick={props.refreshFunction}
                        >
                            <img src="images/refresh.svg" alt="Copy" className="buttons-images" />
                        </button>
                        <span>Refresh</span>
                    </span>

                </aside>

            </section>
        </div>
    )
}