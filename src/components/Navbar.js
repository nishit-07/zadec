import React from "react";


function Navbar(){
  
    return (
      <>
    
      <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    
    <div class="nav-title">
    <a href="/"><img src="logo2.png" style={{width:"220px" ,height:"140px",marginTop:"-47px",marginLeft:"-40px"}}></img></a>
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <a href="/">Home</a>
    <a href="/About">About</a>
    <a href="/Elevators">Elevators</a>
    <a href="/Component">Components</a>
    <a href="/Service">Service</a>
    <a href="/Contact">contact</a>
  </div>
</div>
   </>
    )
    };


  
export default Navbar;