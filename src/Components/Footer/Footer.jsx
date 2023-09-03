import darkDino from "../../Assets/dark-dino.png";

const Footer = () => {
    return (
        <footer>
            <img src={ darkDino } alt="petit dinosaure mais contrasté" className="dark-dino" />
            <p>© 2023 taisezmoi. Tous droits réservés.<br></br>En vrai j'en sais rien je sais jamais quoi mettre ici, c'est pas taisezmoi c'est aidez-moi.</p>
        </footer>
    )
}

export default Footer;