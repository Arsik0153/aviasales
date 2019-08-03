import React from 'react';
import Logo from './components/Logo/Logo';
import Filter from './components/Filter/Filter';
import Tabs from './components/Tabs/Tabs';

const App = () =>{
  return (
    <div className="App">
      <Logo />
      <div className="container">
        <div className="row">
          <Filter />
          <Tabs />
        </div>
      </div>
    </div>
  );
}

export default App;
