import {
  Route,
  BrowserRouter as Router,
  Routes as Switch,
} from 'react-router-dom';
import { LocationProvider } from '../contexts/LocationContext';
import { Home } from '../pages/Home';
import { Header } from '../components/Header';

const defaultSettings = {
  city: 'São Paulo',
  state: 'SP',
};

export const Routes = () => {
  return (
    <LocationProvider>
      <Header />
      <Switch>
        <Route path="/:state/:city" element={<Home />} />
        <Route
          path="/"
          element={
            <Home city={defaultSettings.city} state={defaultSettings.state} />
          }
        />
      </Switch>
    </LocationProvider>
  );
};
