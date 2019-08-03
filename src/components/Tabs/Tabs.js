import React from 'react';
import './Tabs.css';

const Tabs = () => {
  return(
    <div className="tabs">
      <button className="tab active">Самый дешевый</button>
      <button className="tab">Самый быстрый</button>
    </div>
  );
}

export default Tabs;