import React, { useState, useEffect } from 'react';
import './Tabs.css';

const Tabs = () => {

  const [activeButton, setActiveButton] = useState(1);

  return(
    <div className="tabs">
      <button className="tab active">Самый дешевый</button>
      <button className="tab">Самый быстрый</button>
    </div>
  );
}

export default Tabs;