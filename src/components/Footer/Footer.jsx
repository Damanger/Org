import "./Footer.css"

const Footer = () =>{
    return <footer className="footer">
        <div className="redes">
            <a href="https://wa.me/5219514084765" target="_blank" rel="noreferrer" className="social-button whatsapp">
                <i className="fab fa-whatsapp"></i>                 
            </a>
            <a href="https://www.linkedin.com/in/omar-cruzr97/" target="_blank" rel="noreferrer" className="social-button linkedin">
                <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/Damanger/" target="_blank" rel="noreferrer" className="social-button facebook">
                <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/ich_bin_omarrmz/" target="_blank" rel="noreferrer" className="social-button instagram">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com/Damanger" target="_blank" rel="noreferrer" className="social-button github">
                <i className="fab fa-github"></i>
            </a>
        </div>
    </footer>
}

export default Footer