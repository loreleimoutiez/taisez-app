import { Link, useLocation } from "react-router-dom";
import dino from "../../Assets/dino.png";

const Navbar = () => {
    const location = useLocation();

    return (
        <header>
            <div className="taisez-div">
                <img src={ dino } alt="petit dinosaure" className="dino" />
                <h1 className="taisezmoi">taisezmoi</h1>
            </div>
        <nav>
            <ul>
            <li className={location.pathname === "/" ? "home active" : "home"}><Link to="/">Accueil</Link></li>
            <li className={location.pathname === "/about" ? "about active" : "about"}><Link to="/about">À Propos</Link></li>
            </ul>
        </nav>
        </header>
    )
}

export default Navbar;