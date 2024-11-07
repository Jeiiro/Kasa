import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function NavBar(){

  const location = useLocation();

    return (
        <>     
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="App-nav">
          <Link 
            to="/" 
            className={location.pathname === "/" ? "active-link" : "link"}
            >
            <span>Accueil</span>
          </Link>
          <Link 
            to="/infos" 
            className={location.pathname === "/infos"? "active-link" : "link"}
            >
            <span>A propos</span>
          </Link>
        </nav>
        </>
    )
 }