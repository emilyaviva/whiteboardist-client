import React from 'react';
import { Provider } from 'react-redux';
import { Container } from 'react-bootstrap';

import store from './store';
import Login from './components/Login';
import './App.scss';

const App = () => (
  <Provider store={store}>
    <Container className="App">
      <h1>Whiteboardist</h1>
      <Login />
    </Container>
  </Provider>
);

export default App;
