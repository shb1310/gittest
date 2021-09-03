import React from 'react';
import './css/button.css';
import menu from './menu.svg';
import search from './search.svg';
import './css/Search.css';
import Nav from './Nav';
import {Link} from 'react-router-dom';


function SearchNotFound(){
    alert("해당 검색에 대한 결과가 존재하지 않습니다.");
     }

function Search() {
    return(
        
          <div id="Search">
                 <div id="button">
              <Nav/>
           <div id="button1">
           <Link to='/listk'>  <button id="한식" value="한식">한식</button></Link>
           <Link to='/listz'>   <button id="중식" value="중식">중식</button></Link>
           <Link to='/listl'>    <button id="일식" value="일식">일식</button></Link>
           <Link to='/lists'>   <button id="서양식" value="서양식">서양식</button></Link>
           
          </div> 
          <div id="button2">  
          <Link to='/liste'>   <button id="기타" value="기타">기타</button></Link>   
          <Link to='/listj'>   <button id="즐겨찾기" value="즐겨찾기">즐겨찾기</button></Link>
          <Link to='/listp'>   <button id="공영주차장" value="공영주차장">공영주차장</button></Link>
          </div>
          <div class="search">
          <Link to='/loc'> <img src={menu} className="menu" alt="menu"/></Link>
            <input type="text" className="inputtxt"/>
            <img src={search} className="searchIcon" alt="search" onClick={SearchNotFound}/>
           </div>
        </div>
        </div>
    );
}

export default Search;