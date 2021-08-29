import React from 'react';
import GlobalStyle from './style';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Toaster/>
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
