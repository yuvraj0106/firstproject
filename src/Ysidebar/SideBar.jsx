import React from 'react'
import './SideB.css';
function SideBar() {
  return (



    <div id="sb">
       
      <ul id="ul">
      <li>
       <i class="fa-solid fa-house-signal"></i><a href="">HOME</a>
       </li>
<li>       <i class="fa-solid fa-bolt"></i>  
 <a href="">SHORTS</a>

</li>
<li>
<i class="fa-solid fa-tv"></i>
 <a href="">SUBSCRIPTION</a>
</li>
<hr />
<li><i class="fa-solid fa-chalkboard-user"></i><a href="">YOU</a>
</li> 
<li><i class="fa-solid fa-clock-rotate-left"></i><a href="">HISTORY</a></li>   
<hr />
<li className="bt">
    <button><i class="fa-solid fa-user-plus"></i>
        </button><a href="">SIGN IN</a>
        </li> 
        <hr />
        <li>
        <i class="fa-solid fa-icons"></i><a href="">TRENDING</a>
        </li>
        <li><i class="fa-solid fa-bag-shopping"></i><a href="">TRENDING</a></li>
        <li><i class="fa-solid fa-music"></i><a href="">MUSIC</a></li>
        <li><i class="fa-solid fa-clapperboard"></i><a href="">MOVIES</a></li>
        <li><i class="fa-solid fa-globe"></i><a href="">LIVE</a></li>
        <li><i class="fa-solid fa-gamepad"></i><a href="">GAMING</a></li>
    <li><i class="fa-regular fa-newspaper"></i><a href="">NEWS</a></li>
    <li><i class="fa-solid fa-trophy"></i><a href="">SPORTS</a></li>
    <li><i class="fa-solid fa-graduation-cap"></i><a href="">LEARNING</a></li>
    <li><i class="fa-solid fa-hat-cowboy-side"></i><a href="">FASHION</a></li>
    <li><i class="fa-solid fa-podcast"></i><a href="">PODCAST</a></li>
 </ul>
    </div>
  )
}

export default SideBar
