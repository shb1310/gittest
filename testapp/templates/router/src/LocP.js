import React from 'react';
import './App.css';
import './css/button.css';
import './css/logoF.css';
import './css/list.css';
import './css/map.css';
import './css/Loc.css'
import './css/Search.css';
import map from './map/locp.png';
import LocButton from './LocButton';



function LocP() {
  console.log('LocP');
  return (
    <div id="LocP">
      <LocButton />
        <br /><br />
        <img src={map} className="map" alt="map"/>
 
    </div>
  );
}

export default LocP;
