import React from 'react';
import GlobalStyle from './style';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
