import { Link } from "react-router-dom";


export default function ErrorBoundary () {
    return (
        <div className="error-boundary">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <Link
          to="/"
          className="link"
        >
          Retourner sur la page d'accueil
        </Link>
        </div>
    )
}

