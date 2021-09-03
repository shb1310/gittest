import React from 'react';
import './css/Home.css';
import Loc from './Loc';
import logo from './logo.svg';
import {Link} from 'react-router-dom';
function button_Nevent(){
  var conf=window.confirm("IP에 따른 주소 위치 사용 미동의 시 위치 기반 서비스를 이용할 수 없습니다.");
    if(conf)
    <Loc></Loc>
  
   }

function Home() {
  return (
  
    <div className="Home">
      <div className="Homelogo">
      <br/> <br/> <br/> <br/><br/> <br/>
      <img src={logo} className="Home_logo" alt="logo"/>
    <h1 id="title"> 안심식당</h1>
    </div>
    <br/> <br/> <br/> <br/> <br/>
    <div className="caution">IP에 따른 주소 위치 사용 동의</div><br /> <br/>
    <Link style={{color:'white'}} to='/loc'><button className="button_agree">동의</button></Link><br /><br />
    <button className="button_Nagree" onClick={button_Nevent}>동의안함</button>
    
  </div>
   
  );
}

export default Home;
