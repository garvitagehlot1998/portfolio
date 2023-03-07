import React from 'react'
import { IoIosList } from "react-icons/io";
import './navbar.css'
function Navbar() {
  const handleClick =() =>{
    let element = document.getElementById("navlinks")
    const computedStyle = window.getComputedStyle(element,null)
    console.log(computedStyle.display)
    if(computedStyle.display ==="none"){
      element.style='display:flex'
    }
    else{element.style='display:none'}
  }
  return (
    <div className='navbar'>
      <div className='logo'>G</div>
      <div className='navlinks'>
      <ul id ="navlinks">
        <li>Home</li>
        <li>About Me</li>
        <li>Blogs</li>
        <li>Contact</li>
      </ul>
      </div>
      <div className='icon' onClick ={handleClick}>
        <IoIosList/>
      </div>
      
    </div>
  )
}

export default Navbar

