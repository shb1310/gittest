import React from 'react';
import './App.css';
import './css/button.css';
import './css/logoF.css';
import './css/list.css';
import './css/map.css';
import './css/Loc.css'
import './css/Search.css';
import ListButton from './ListButton';


function ListS() {
  console.log('ListS');
  return (
    <div id="ListS">
  
       <ListButton/>
      
    <br /><br />
    <table class="result">
        <thead>
           <tr>
            <th>No.</th>
            <th class="name">이름</th>
            <th class="address">주소</th>
            <th class="number">전화번호</th>
          </tr>
        </thead>
        <tbody>
         
          <tr>
          <td>1.</td>
          <td class="name">서양식1</td>
            <td class="address">부산</td>
            <td class="number">051-0000-0000</td>
          </tr>
          <tr>
          <td></td>
            <td class="name"></td>
            <td class="address"></td>
            <td class="number"></td>
          </tr>
          <tr>
          <td></td>
            <td class="name"></td>
            <td class="address"></td>
            <td class="number"></td>
          </tr>
          <tr>
          <td></td>
            <td class="name"></td>
            <td class="address"></td>
            <td class="number"></td>
          </tr>
          <tr>
          <td></td>
            <td class="name"></td>
            <td class="address"></td>
            <td class="number"></td>
          </tr>
          <tr>
          <td></td>
            <td class="name"></td>
            <td class="address"></td>
            <td class="number"></td>
          </tr>
          <tr>
          <td></td>
            <td class="name"></td>
            <td class="address"></td>
            <td class="number"></td>
          </tr>
          <tr>
          <td></td>
            <td class="name"></td>
            <td class="address"></td>
            <td class="number"></td>
          </tr>
          <tr>
          <td></td>
            <td class="name"></td>
            <td class="address"></td>
            <td class="number"></td>
          </tr>
          <tr>
          <td></td>
            <td class="name"></td>
            <td class="address"></td>
            <td class="number"></td>
          </tr>
        </tbody>
        </table>

</div>
  );
}

export default ListS;
