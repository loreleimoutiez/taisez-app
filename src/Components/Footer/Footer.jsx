import darkDino from "../../Assets/dark-dino.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// todo: les liens dans les Icons, avec la nav tmtc 
const Footer = () => {
    return (
        <footer>
            <img src={ darkDino } alt="petit dinosaure mais contrasté" className="dark-dino" />
            <div className="socials">
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faCloud} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faGithub} />
            </div>
            <p>© 2023 taisezmoi. Tous droits réservés.<br></br>En vrai j'en sais rien je sais jamais quoi mettre ici, c'est pas taisezmoi c'est aidez-moi.</p>
        </footer>
    )
}

export default Footer;