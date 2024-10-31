import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function NavBar(){

    return (
        <>     
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="App-nav">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="link">Accueil</span>
          </Link>
          <Link to="/infos" style={{ textDecoration: "none" }}>
            <span className="link">A propos</span>
          </Link>
        </nav>
        </>
    )
 }