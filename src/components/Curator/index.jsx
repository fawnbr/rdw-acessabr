import './styles.scss';

import curatorPhoto from '../../assets/images/curatorPhoto.jpg';

export const Curator = () => {
  return (
    <div className="curator__container">
      <div className="curator__photo">
        <img src={curatorPhoto} alt="Foto do curador Lucas Vinicius" />
      </div>
      <div className="curator__details">
        <h3>Lucas Vinícius</h3>
        <h6>Curadoria</h6>
        <p>
          Migrou de área em meados de 2021. Atualmente é Desenvolvedor Fullstack
          em JavaScript com Node.js e React.
        </p>
      </div>
    </div>
  );
};
