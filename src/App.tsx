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
import Error from './pages/Error';
import Feed from './pages/Feed';
import PostDetails from './pages/PostDetails';

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

          <Route path="/register" >
            <Login/>
          </Route>

          <Route path="/feed" >
            <Feed/>
          </Route>
          
          <Route path="/post_details/:id" >
            <PostDetails/>
          </Route>

          <Route path="*" >
            <Error/>
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
