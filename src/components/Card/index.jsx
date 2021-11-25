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
  { id: 1, photo: iconBraile, text: 'Sinalização em Braile' },
  { id: 2, photo: iconAudio, text: 'Audio descrição' },
  { id: 3, photo: iconBanheiro, text: 'Banheiro acessível' },
  { id: 4, photo: iconElevador, text: 'Elevador para cadeirantes' },
  {
    id: 5,
    photo: iconEstacionamento,
    text: 'Estacionamento para idosos / deficientes',
  },
  { id: 6, photo: iconCaoGuia, text: 'Permite acesso de cães-guias' },
  { id: 7, photo: iconPisoTatil, text: '"Piso tátil de alerta' },
  { id: 8, photo: iconPortaLarga, text: 'Portas largas' },
  { id: 9, photo: iconRampa, text: 'Rampas de acesso para cadeirante' },
  { id: 10, photo: iconLibras, text: 'Atendimento em Libras' },
];

export const Card = () => {
  return (
    <div className="card__container">
      <div className="card__image"></div>
      <div className="card__content">
        <h3>Nome do local</h3>
        <ul className="card__facilities">
          {facilities.map((item) =>
            item.id == 3 ? (
              <li
                key={item.id}
                className="card__facilities__item card__facilities__item--unchecked"
              >
                <img src={item.photo} alt={item.text} title={item.text} />
              </li>
            ) : (
              <li key={item.id} className="card__facilities__item">
                <img src={item.photo} alt={item.text} title={item.text} />
              </li>
            ),
          )}
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adip id el.</p>
        <Button onClick={() => console.log('Cliquei')} width={11}>
          Como chegar
        </Button>
      </div>
    </div>
  );
};
