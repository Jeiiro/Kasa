import "../styles/Infos.scss";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function Infos() {
  return (
    <div className="Infos">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/infos">A propos</Link>
        </nav>
      </header>
    </div>
  );
}

export default Infos;
