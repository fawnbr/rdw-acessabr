import { useContext } from 'react';
import { PlacesContext } from '../../contexts/PlacesContext';
import { Slider } from '../Slider';
import './styles.scss';

export const Places = () => {
  const { place } = useContext(PlacesContext);

  const placeInPlural = (place) => {
    if (place.endsWith('l')) {
      return place.replace('l', 'is');
    } else {
      return place + 's';
    }
  };
  return (
    <section className="places">
      <div className="places__header">
        <h2 className="places__title">
          {place != null ? placeInPlural(place) : 'Locais'}{' '}
          <span>acessíveis</span>
        </h2>

        <div className="places__select">
          <h5>Ordernar por:</h5>
          <select name="" id="">
            <option value="">distância</option>
            <option value="">alfabeto</option>
          </select>
        </div>
      </div>
      <div className="places__content">
        <Slider />
      </div>
    </section>
  );
};
