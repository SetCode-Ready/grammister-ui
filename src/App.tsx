import React from 'react';
import GlobalStyle from './style';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';
import Register from './pages/Register';
import Error from './pages/Error';
import Feed from './pages/Feed';
import PostDetails from './pages/PostDetails';
import { ApolloProvider } from '@apollo/client';
import { client } from './config/ApolloClient';
import Auth from './context/Auth';
import User from './pages/User';
import ForgotPassword from './pages/ForgotPassword';
import ForgotPasswordEmail from './pages/ForgotPasswordEmail';

function App() {
  return (
      <Auth>
    <ApolloProvider client={client}>
      <GlobalStyle/>
      <Toaster/>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/register" >
            <Register/>
          </Route>

          <Route path="/feed" >
            <Feed/>
          </Route>
          
          <Route path="/post_details/:id" >
            <PostDetails/>
          </Route>

          <Route path="/user/:id">
            <User/>
          </Route>

          <Route path="/forgot_password">
            <ForgotPasswordEmail/>
          </Route>

          <Route path="*" >
            <Error/>
          </Route>

        </Switch>
      </Router>
    </ApolloProvider>
    </Auth>
  );
}

export default App;
