import {
  Route,
  BrowserRouter as Router,
  Routes as Switch,
} from 'react-router-dom';
import { Home } from '../pages/Home';

export const routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/:state/:city" element={<Home />} />
      </Switch>
    </Router>
  );
};
