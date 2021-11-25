import { Curator } from './components/Curator';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Places } from './components/Places';
import { Home } from './pages/Home';
import './styles/styles.global.scss';

function App() {
  return (
    <div className="App">
      <div className="main__wrapper">
        <div className="main__container">
          <Header city="Natal" state="RN" />
          <Home />
          <Places />
          <Curator />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
