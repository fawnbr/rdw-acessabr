import './styles.scss';
import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LocationContext } from '../../contexts/LocationContext';
import { Pill } from '../../components/Pill';

import highlightedImage from '../../assets/images/highlightedImage.png';
import { places } from '../../utils/places';

export const Home = () => {
  const [selectedPill, setSelectedPill] = useState(null);

  const { city, state } = useParams();
  const { setCity, setState } = useContext(LocationContext);

  useEffect(() => {
    setCity(city);
    setState(state);
  }, [setCity, setState, city, state]);

  return (
    <main id="main-content" className="home__container">
      <div className="home__col">
        <h1 className="home__title">{city || 'São Paulo'} para todos</h1>
        <div className="home__image--highlighted hide-desktop">
          <img
            src={highlightedImage}
            alt="Cadeirante segurando uma esfera de discoteca"
          />
        </div>
        <p className="home__text">
          Nossa missão é facilitar o encontro entre lugares inclusivos e pessoas
          que buscam alternativas culturais para sair de casa, com a mobilidade
          que todo cidadão precisa.
        </p>
        <p className="home__text">
          Checamos 10 itens essenciais de acessibilidade para pessoas com
          deficiência em diversos pontos da cidade.
        </p>

        <div className="home__pills">
          {places.map((place) => (
            <Pill
              key={place}
              place={place}
              selected={selectedPill === place}
              onClick={() => setSelectedPill(place)}
            />
          ))}
        </div>
      </div>
      <div className="home__col hide-mobile">
        <div className="home__image--highlighted">
          <img
            src={highlightedImage}
            alt="Cadeirante segurando uma esfera de discoteca"
          />
        </div>
      </div>
    </main>
  );
};
