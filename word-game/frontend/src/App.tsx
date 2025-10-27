import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game from './pages/Game';
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <h1>Welcome to the Word Game!</h1>
          <p>Get ready to test your word skills.</p>
        </Route>
        <Route path="/game" component={Game} />
      </Switch>
    </Router>
  );
};

export default App;