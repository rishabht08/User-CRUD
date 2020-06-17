import React from 'react';

import './App.css';
import './components/Header'
import Header from './components/Header';
import MainBody from './components/mainBody';

function App() {
  return (
    <React.Fragment>
      <Header />
      <MainBody />
    </React.Fragment>
  );
}

export default App;
