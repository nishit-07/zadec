import React from 'react'

export default function Home() {
 

  return (
    <div>
      <video loop  autoPlay={true} muted={true} style={{ height: '500px', width: '100%',marginTop:"10px" ,pointerEvents:"none"}}>
        <source src="Zadec lift open.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
<div className="container">
        <div className="title">
          <h1>MAKING YOUR MOVEMENT STYLES</h1>
          <p>Why to waste your time by using stairs when Zadec Elevator is here? <br/>
          Consult us at Zadec Elevators to save your precious time.<br/>
            
          </p>
        </div>
        <div className='home-p-img'>
          <img src="https://images.unsplash.com/photo-1566096650255-98ba2641071e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWxldmF0b3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" ></img>
          
        </div>
      </div>
      <h1 className='se-r'>Services</h1>
      <div className='h-service'>
        
        <div className='inst'>
        <img src='ins.png' ></img>
        <h2>Installation</h2>
        </div>

        <div className='mainta'>
          <img src='mainta.png'></img>
          <h2>Maintenance</h2>
          </div>

        <div className='loca'>
        <img src='location.png'></img>
        <h2>Location</h2>
        </div>
      </div>
      <div className='ele-h'>
        <h1>Zadec Elevators</h1>
        <div className='all-ele'>
          <div className='1-ele-1'>
            <img src='https://expresselevators.co/wp-content/uploads/sites/266/2019/09/Passenger-Elevator-Manual.png'></img>
            <h2>Passenger Elevator Manual Door</h2>
          </div>
          <div className='2-ele-1'>
            <img src='auto design.png'></img>
            <h2>Passenger Elevator Automatic Door</h2>
          </div>
          
        </div>
        <div className='all-ele2'>
          <div className='1-ele-2'>
            <img src='https://expresselevators.co/wp-content/uploads/sites/266/2019/09/Capsule-Elevators.png'></img>
            <h2>Capsule Elevator</h2>
          </div>
          <div className='2-ele-2'>
            <img src='hospital-elevator1.png'></img>
            <h2>Hospital Elevator</h2>
          </div>
          
        </div>
      </div>
       </div>
       
  )
}
