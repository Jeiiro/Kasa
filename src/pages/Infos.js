import "../styles/Infos.scss";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Banners from "../components/Banners";
import Collapse from "../components/Collapse";

function Infos() {
  const collapsesData = [
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      content:
        "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérfier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];
  return (
    <div className="Infos">
      <header className="Infos-header">
        <NavBar />
      </header>

      <main className="Infos-main">
        <Banners className="MainInfos-header" showTitle={false} />
        <div className="Collapse-container">
          {collapsesData.map((collapse, index) => (
            <Collapse
              key={index}
              title={collapse.title}
              content={collapse.content}
            />
          ))}
        </div>
      </main>

      <footer className="Infos-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Infos;
