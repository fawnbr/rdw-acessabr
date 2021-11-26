import PropTypes from 'prop-types';
import { Button } from '../Button';

import './styles.scss';

import { facilities } from '../../utils/facilities';

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
