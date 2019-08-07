import React from 'react';
import './Filter.css';

const Filter = () => {
  return(
    <div className="filter">
      <h3>Количество пересадок</h3>
      <li>
        <input className="styled-checkbox" id="styled-checkbox-1" type="checkbox"/>
        <label htmlFor="styled-checkbox-1">Все</label>
      </li>
      <li>
        <input className="styled-checkbox" id="styled-checkbox-2" type="checkbox" />
        <label htmlFor="styled-checkbox-2">Без пересадок</label>
      </li>
      <li>
        <input className="styled-checkbox" id="styled-checkbox-3" type="checkbox" />
        <label htmlFor="styled-checkbox-3">1 пересадка</label>
      </li>
      <li>
        <input className="styled-checkbox" id="styled-checkbox-4" type="checkbox" />
        <label htmlFor="styled-checkbox-4">2 пересадки</label>
      </li>
      <li>
        <input className="styled-checkbox" id="styled-checkbox-5" type="checkbox" />
        <label htmlFor="styled-checkbox-5">3 пересадки</label>
      </li>
    </div>
  );
}

export default Filter;