import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from './components/Header';
import { BlockPanel } from './components/BlockPanel';
import { HistoryPanel } from './components/HistoryPanel';
import { ErrorMsg } from './components/ErrorMsg';
import { routes } from './constants/routes';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <BlockPanel/>
        <HistoryPanel/>
        <ErrorMsg/>

        <Switch>
          {routes.map(({ path, component, key, exact }) => <Route exact={exact} path={path} component={component} key={key} /> )}
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
