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
                <a href="https://twitter.com/taisezmoi" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://bsky.app/profile/taisezmoi.bsky.social" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faCloud} />
                </a>
                <a href="https://www.linkedin.com/in/lorelei-moutiez/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/loreleimoutiez" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
            <p>© 2023 taisezmoi. Tous droits réservés.<br></br>En vrai j'en sais rien je sais jamais quoi mettre ici, c'est pas taisezmoi c'est aidez-moi.</p>
        </footer>
    )
}

export default Footer;