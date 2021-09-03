import React from 'react';
import menu from './menu.svg';
import './css/Search.css'
import {Link} from 'react-router-dom';
import Nav from './Nav';
import search from './search.svg';
function LocButton() {
  
    return(
        
          <div id="button">
             <Nav/>
           <div id="button1">
           <Link to='/lock'>  <button id="한식" value="한식">한식</button></Link>
           <Link to='/locz'>   <button id="중식" value="중식">중식</button></Link>
           <Link to='/locl'>    <button id="일식" value="일식">일식</button></Link>
           <Link to='/locs'>   <button id="서양식" value="서양식">서양식</button></Link>
           
          </div> 
          <div id="button2">
          <Link to='/loce'>   <button id="기타" value="기타">기타</button></Link>     
          <Link to='/locj'>   <button id="즐겨찾기" value="즐겨찾기">즐겨찾기</button></Link>
          <Link to='/locp'>   <button id="공영주차장" value="공영주차장">공영주차장</button></Link>
          </div>
          <div class="search">
          <Link to='/list'><img src={menu} className="menu" alt="menu"/></Link>
            <input type="text" className="inputtxt"/>
            <Link to='/search'> <img src={search} className="searchIcon" alt="search"/></Link>
           </div>
        </div>
       
    );
}

export default LocButton;