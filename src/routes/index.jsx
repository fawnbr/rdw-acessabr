import {
  Route,
  BrowserRouter as Router,
  Routes as Switch,
} from 'react-router-dom';
import { LocationProvider } from '../contexts/LocationContext';
import { Home } from '../pages/Home';
import { Header } from '../components/Header';

export const Routes = () => {
  return (
    <LocationProvider>
      <Header />
      <Switch>
        <Route path="/:state/:city" element={<Home />} />
      </Switch>
    </LocationProvider>
  );
};
