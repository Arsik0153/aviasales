import React, { useState } from 'react';
import Logo from './components/Logo/Logo';
import Filter from './components/Filter/Filter';
import Tabs from './components/Tabs/Tabs';
import Tickets from './components/Tickets/Tickets';

const App = () =>{

  const sortMethods = {
    BY_PRICE: 'BY_PRICE',
    BY_TIME: 'BY_TIME'
  };
  
  const [sortMethod, setSortMethod] = useState("byPrice");

  const setNewSortMethod = (newSortMethod) => {
    setSortMethod(newSortMethod);
    console.log(sortMethod);
  };

  return (
    <div className="App">
      <Logo />
      <div className="container">
        <div className="row">
          <div className="flex-30">
            <Filter />
          </div>
          <div className="flex-70">
            <Tabs setNewSortMethod={setNewSortMethod}/>
            <Tickets sortMethod={sortMethod}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
