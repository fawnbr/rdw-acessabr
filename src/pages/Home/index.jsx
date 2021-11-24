import { useState } from 'react';

import './styles.scss';
import highlightedImage from '../../assets/images/highlightedImage.png';

import { Pill } from '../../components/Pill';

const places = [
  'Praça',
  'Parque',
  'Igreja',
  'Hotel',
  'Restaurante',
  'Zoológico',
  'Farmácia',
  'Loja',
  'Aquário',
];

export const Home = () => {
  const [selectedPill, setSelectedPill] = useState('');

  return (
    <main id="main-content" className="home__container">
      <div className="home__col">
        <h1 className="home__title">São Paulo para todos</h1>
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
      <div className="home__col">
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
