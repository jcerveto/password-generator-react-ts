import { useState } from "react";

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
        <section className="password-container">
            <span className="password">
                {props.password}
            </span>
            <aside className="password-utils-container">
                <span>
                    <button
                        className="button-with-image"
                        onClick={handleCopyToClipboard}
                        style={{ backgroundImage: `url(${'public/images/copy.jpg'})` }}
                        
                    >
                    </button>
                    <span>
                        <span>Copy</span>
                        <p>
                            { showCopyToClipboardMessage 
                                ? 
                                    <span
                                        className="copy-message"
                                    >
                                        Copied to clipboard
                                    </span> 
                                :   null
                                }
                        </p>
                    </span>

                </span>

                <span>
                    <button 
                        className="button-with-image"
                        onClick={props.refreshFunction} 
                        style={{ backgroundImage: `url(${'public/images/refresh.png'})` }}
                    >
                    </button>
                    <span>Refresh</span>
                </span>

            </aside>

        </section>
    )
}