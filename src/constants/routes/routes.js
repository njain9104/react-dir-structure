import { Home } from '../../components';
import PATHS from './paths';

const APP_ROUTES = [
  {
    path: PATHS.HOME,
    component: Home,
    exact: true
  }
];

export default APP_ROUTES;
