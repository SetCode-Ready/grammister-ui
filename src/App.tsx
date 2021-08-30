import React from 'react';
import GlobalStyle from './style';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login';

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

          <Route path="/login" >
            <Login/>
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
