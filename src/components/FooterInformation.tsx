import "../styles/FooterInformation.css"

export const FooterInformation = () => {
    return (
        <div className="footer-information-container">
            <span>
                <a 
                    className="footer-information-anchor" 
                    href="https://github.com/jcerveto/password-generator-react-ts"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src="images/github-mark.svg" alt="GitHub" className="github-logo" />
                    <span>Github</span>
                </a>
            </span>


            <span>
                <i>Summer 2023</i>
            </span>

            <span>
                Joan Cerveto Serrano
            </span>


        </div>            
    )
}