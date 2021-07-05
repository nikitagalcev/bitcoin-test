import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Header } from './components/Header';
import { BlockPanel } from './components/BlockPanel';
import { HistoryPanel } from './components/HistoryPanel';
import { ErrorMsg } from './components/ErrorMsg';
import { Wallet } from './pages/Wallet';
import { Buy } from './pages/Buy';
import { Sell } from './pages/Sell';
import { Bitcoin } from './pages/Bitcoin';
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
          <Route exact path="/">
            <Redirect to="/wallet" />
          </Route>
          <Route path="/wallet">
            <Wallet/>
          </Route>
          <Route path="/buy">
            <Buy/>
          </Route>
          <Route path="/sell">
            <Sell/>
          </Route>
          <Route path="/bitcoin">
            <Bitcoin/>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;