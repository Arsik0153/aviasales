import React, { useState, useEffect} from 'react';
import Logo from './components/Logo/Logo';
import Filter from './components/Filter/Filter';
import Tabs from './components/Tabs/Tabs';
import Tickets from './components/Tickets/Tickets';

const App = () =>{

  const [sortMethod, setSortMethod] = useState("byPrice");

  return (
    <div className="App">
      <Logo />
      <div className="container">
        <div className="row">
          <div className="flex-30">
            <Filter />
          </div>
          <div className="flex-70">
            <Tabs />
            <Tickets sortMethod={sortMethod}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
