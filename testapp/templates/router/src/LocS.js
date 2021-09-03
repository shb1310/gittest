import React from 'react';
import './App.css';
import './css/button.css';
import './css/logoF.css';
import './css/list.css';
import './css/map.css';
import './css/Loc.css'
import './css/Search.css';
import map from './map/locs.png'
import LocButton from './LocButton';


function LocS() {
  console.log('LocS');
  return (
    <div id="LoLocScB">
      <LocButton />
        <br /><br />
        <img src={map} className="map" alt="map"/>
 
    </div>
  );
}

export default LocS;
