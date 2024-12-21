import "../styles/Error.scss";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ErrorBoundary from "../components/ErrorBoundary";

function Error() {
  return (
    <div className="Error">
      <header className="Error-header">
        <NavBar />
      </header>
      <main className="Error-main">
        <ErrorBoundary />
      </main>
      <footer className="Error-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Error;
