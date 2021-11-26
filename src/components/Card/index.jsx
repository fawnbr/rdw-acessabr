import PropTypes from 'prop-types';
import { Button } from '../Button';

import iconAudio from '../../assets/images/icon-audio-descricao.png';
import iconBanheiro from '../../assets/images/icon-banheiro-acessivel.png';
import iconBraile from '../../assets/images/icon-braile.png';
import iconCaoGuia from '../../assets/images/icon-caoguia.png';
import iconElevador from '../../assets/images/icon-elevador.png';
import iconEstacionamento from '../../assets/images/icon-estacionamento.png';
import iconPisoTatil from '../../assets/images/icon-piso-tatil.png';
import iconPortaLarga from '../../assets/images/icon-porta-larga.png';
import iconRampa from '../../assets/images/icon-rampa.png';
import iconLibras from '../../assets/images/icon-libras.png';

import './styles.scss';

const facilities = [
  { id: 1, photo: iconBraile, text: 'Sinalização em Braile', checked: true },
  { id: 2, photo: iconAudio, text: 'Audio descrição', checked: true },
  { id: 3, photo: iconBanheiro, text: 'Banheiro acessível', checked: true },
  {
    id: 4,
    photo: iconElevador,
    text: 'Elevador para cadeirantes',
    checked: true,
  },
  {
    id: 5,
    photo: iconEstacionamento,
    text: 'Estacionamento para idosos / deficientes',
    checked: false,
  },
  {
    id: 6,
    photo: iconCaoGuia,
    text: 'Permite acesso de cães-guias',
    checked: true,
  },
  { id: 7, photo: iconPisoTatil, text: '"Piso tátil de alerta', checked: true },
  { id: 8, photo: iconPortaLarga, text: 'Portas largas', checked: true },
  {
    id: 9,
    photo: iconRampa,
    text: 'Rampas de acesso para cadeirante',
    checked: true,
  },
  { id: 10, photo: iconLibras, text: 'Atendimento em Libras', checked: true },
];

export const Card = (props) => {
  return (
    <div className="card__container">
      <div className="card__image">
        <img src={props.photo} alt={props.title} />
      </div>
      <div className="card__content">
        <h3>{props.title}</h3>
        <ul className="card__facilities">
          {facilities.map((item) => (
            <li key={item.id} className="card__facilities__item">
              <img src={item.photo} alt={item.text} title={item.text} />
            </li>
          ))}
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adip id el.</p>
        <Button onClick={() => console.log('Cliquei')} width={11}>
          Como chegar
        </Button>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};
