import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import styles from './App.module.scss';
import locations, { ID_PATH_PARAM } from 'routes';

const Users = lazy(() => import('pages/Users'));
const ListProperties = lazy(() => import('pages/Properties/ListProperties'));
const ShowProperty = lazy(() => import('pages/Properties/ShowProperty'));
const NewProperty = lazy(() => import('pages/Properties/NewProperty'));
const Home = lazy(() => import('pages/Home'));
const NotFound = lazy(() => import('pages/NotFound'));

const routes = [
  { path: locations.root(), component: Home },
  { path: locations.users(), component: Users },
  { path: locations.properties(), component: ListProperties },
  { path: locations.newProperty(), component: NewProperty },
  { path: locations.showProperty(ID_PATH_PARAM), component: ShowProperty },
];

const App: React.FC = () => (
  <Router>
    <Navbar />
    <div className={styles.app}>
      <header className={styles['app-header']}>
        <Suspense fallback={<div> Loading... </div>}>
          <Switch>
            {routes.map((route, idx) => (
              <Route
                key={idx}
                path={route.path}
                exact
                component={route.component}
              />
            ))}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </header>
    </div>
  </Router>
);

export default App;
