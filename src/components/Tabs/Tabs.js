import React, { useState } from 'react';
import './Tabs.css';

const Tabs = ({setNewSortMethod}) => {

  const [activeButton, setActiveButton] = useState(0);

  const toggleButtons = (e) => {

    if(parseInt(e.target.value) === activeButton)
      return;

    if(parseInt(e.target.value) === 0)
      setNewSortMethod("byPrice");
    if(parseInt(e.target.value) === 1)
      setNewSortMethod("byPriceDesc");
    
    setActiveButton(parseInt(e.target.value));
  }

  return(
    <div className="tabs">
      <button 
        className={activeButton === 0 ? ("tab active") : ("tab")}
        onClick={(e)=>{toggleButtons(e)}}
        value={0}
      >
          Самый дешевый
      </button>
      <button 
        className={activeButton === 1 ? ("tab active") : ("tab")}
        onClick={(e)=>{toggleButtons(e)}}
        value={1}
      >
          Самый быстрый
      </button>
    </div>
  );
}

export default Tabs;