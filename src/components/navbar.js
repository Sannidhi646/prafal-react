import React from "react";
import { useEffect } from "react";
const menus=document.getElementById('menu');
const links=document.getElementById('links');
const cancel=document.getElementById('cancel');
function Greet(props){
  
 if(menus)
 {
  menus.addEventListener('Onclick',()=>{
    cancel.classList.add('cancel')
    links.classList.add('menu_bar');
    console.log("clicked");
  })
 }
 if(cancel)
 {
  cancel.addEventListener('click',()=>{
    cancel.classList.add('cancel')
    links.classList.remove('menu_bar');
  })
 }
 function ex(){
  console.log("clicked");
 }

 
    return (//<div id="check"><h2>I am a { props.val }  {props.ved}!</h2>
    //</div>
    <section id="navbar">
      <div class="bar">
        <img class="logo" src="./images/logo3.png" alt=""/>
        <div class="links " id="links">
        <span className="material-symbols-outlined" id="cancel">close</span>
              <a class="link" href="#">Home </a>
              <a class="link" href="#">About Us </a>
              <a class="link" href="#">Blog </a>
              <a class="link" href="#">Contact </a>
        </div>
        <span className="material-symbols-outlined" onClick="ex()" id="menu">menu</span>
      </div>
    </section>

    );
  }
export default Greet

