import '../styles/App.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import Banners from '../components/Banners';
import Cards from '../components/Cards';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import locationData from '../kasaData.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>

      <main className="App-main">
        <Banners
          title="Chez vous, partout et ailleurs"
          className="Main-header"
          showTitle={true}
        />
        <div className="cards">
          {locationData.map((items) => (
            <Link
              to={`/logement/${items.id}`}
              className="card"
              key={items.id}
            >
              <Cards data={items} />
            </Link>
          ))}
        </div>
      </main>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
