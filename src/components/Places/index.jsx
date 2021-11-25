import { Slider } from '../Slider';
import './styles.scss';

export const Places = () => {
  return (
    <section className="places">
      <div className="places__header">
        <h2 className="places__title">
          Locais <span>acessíveis</span>
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
