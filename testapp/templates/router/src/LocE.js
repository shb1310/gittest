import React from 'react';
import './App.css';
import './css/button.css';
import './css/logoF.css';
import './css/list.css';
import './css/map.css';
import './css/Loc.css'
import './css/Search.css';
import map from './map/loce.png'
import LocButton from './LocButton';


function LocE() {
  console.log('LocE');
  return (
    <div id="LocE">
      <LocButton />
        <br /><br />
        <img src={map} className="map" alt="map"/>
 
    </div>
  );
}

export default LocE;
