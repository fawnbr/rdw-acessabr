import { Curator } from './components/Curator';
import { Footer } from './components/Footer';
import { Places } from './components/Places';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { PlacesProvider } from './contexts/PlacesContext';
import './styles/styles.global.scss';

function App() {
  return (
    <div className="App">
      <div className="main__wrapper">
        <div className="main__container">
          <BrowserRouter>
            <PlacesProvider>
              <Routes />
              <Places />
            </PlacesProvider>
            <Curator />
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
