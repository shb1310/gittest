import React from 'react';
import './App.css';
import './css/button.css';
import './css/logoF.css';
import './css/list.css';
import './css/map.css';
import './css/Loc.css'
import './css/Search.css';
import MapG from './MapG';
import LocGButton from './LocGButton';


function LocLG() {
  console.log('LocLG');
  return (
    <div id="LocLG">
       <LocGButton />{/* 버튼 불러오기 */}
        <br /><br />
        {/* <img src={map} className="map" alt="map"/>
        일식 지도 나타냄-> 지금은 이미지 이지만, 추후 지도 api로 변경 예정(7/29) */}
        <MapG />
    </div>
  );
}

export default LocLG;
