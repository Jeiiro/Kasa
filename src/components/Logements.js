import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/Logements.scss";
import locationData from "../kasaData.json";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import TitleAndLocation from "../components/TitleAndLocation";
import HostInfo from "../components/HostInfo";
import Tags from "../components/Tags";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";

export default function HousingDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const housing = locationData.find((item) => item.id === id);

  useEffect(() => {
    if (!housing) {
      navigate("/Error", { replace: true });
    }
  }, [housing, navigate]);

  if (!housing) {
    return null;
  }

  return (
    <div className="Housing-details">
      <header className="Housing-header">
        <NavBar />
      </header>
      <main className="Housing-main">
        <Carousel pictures={housing.pictures} />
        <div className="Housing-infos">
          <TitleAndLocation
            title={housing.title}
            location={housing.location}
          />
          <HostInfo
            name={housing.host.name}
            picture={housing.host.picture}
          />
          <Tags tags={housing.tags} />
          <Rating rating={housing.rating} />
        </div>

        <div className="Housing-collapse">
          <Collapse
            title="Description"
            content={housing.description}
          />
          <Collapse
            title="Équipements"
            content={
              <ul>
                {housing.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </main>

      <footer className="Housing-footer">
        <Footer />
      </footer>
    </div>
  );
}
