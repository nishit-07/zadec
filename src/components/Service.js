import React from 'react'
import { FaCheck } from 'react-icons/fa'

export default function Service() {
  return (
    <div>
      <div className='service-sec'>
  <div className='service-item'>
  <div className="serv">
        <div className="ser">
          <h1 style={{textShadow: "1px 2px 10px wheat"}}>Our Services</h1>
         <h3> <FaCheck/> <a href='#first' style={{textDecoration:"none",color:"black"}}> New Installation</a></h3>
         <h3> <FaCheck/> <a href='#sec' style={{textDecoration:"none" ,color:"black"}}> Preventive Maintenance</a></h3>
         <h3> <FaCheck/> <a href='#third' style={{textDecoration:"none",color:"black"}}>   Services Loaction</a></h3>
        </div>
        <div className='cnt-img'>
          <img src="service_2.png" style={{width:"420px",height:"320px"}}></img>
          
        </div>
  </div>
   </div>
    </div>
      <div className='install' id='first'>
        <div className='ins-photo'>
          <img style={{marginTop:"100px"}} src='https://www.expresslift.co.in/images/pic2.jpg'></img>
        </div>
        <div className='ins-title'>
        <h1>NEW <span style={{color:"red"}}>INSTALLATION</span></h1>
        <p>Zadec Elevator Company designs, manufactures, and installs a full line of passenger and freight elevators throughout the Midwest.</p>
        <p>Zadec Elevator specializes in hydraulic and traction elevator systems for commercial, healthcare, industrial, and residential facilities in new and existing buildings.</p>
        <h3>Zadec Provides:</h3>
        <ul>
          <li>Budget estimations</li>
          <li>Custom engineering </li>
          <li>Drawing layouts </li>
          <li>Complete specifications </li>
          <li> Field surveys</li>
          <li>Job scheduling</li>
          <li>Project management </li>
          <li> Top-of-the-line customer service</li>
          <li>Ability to accommodate quick installations </li>
          <li> Minimal building disruptions</li>
          
        </ul>
<p>Ongoing training is provided, so installation crews remain current with technological advancements and changes in safety codes.</p>
        </div>
      </div>

      <div className='maintenance' id="sec">
        <h1>PREVENTIVE <span style={{color:"red"}}>MAINTENANCE</span></h1>
        
        <div className='maintenance-img'>
          <img src='https://isfelevator.com/wp-content/uploads/2020/06/Benefits-of-consistent-maintenance-for-elevators.jpg' style={{width:"500px",height:"400px"}}></img>
        </div>
        <div className='maint-title'>
          <p>Zadec Elevator has provided maintenance programs to building owners and managers.</p>
          <p>
          Zadec Elevator commitment to building long-term relationships with our customers is the cornerstone of our success. We strive to keep your vertical transportation equipment running safely and smoothly with minimum downtime and unplanned repairs.</p>
        <p><strong>Safety is our number one focus:</strong>
        <br/>
        We have designed programs to maximize the overall safety and effectiveness of your equipment.</p>
        <p><strong>Performance Guaranteed:</strong><br/>
        
We guarantee your vertical transportation needs are met to ensure your building is operating at peak performance all day, every day.</p>
<p>Zadec Elevator continues to provide the highest amount of scheduled maintenance time in the elevator industry. We believe in preventive maintenance, rather than breakdown maintenance; our goal is to avert problems before they occur. We schedule routine maintenance during off-peak times to minimize downtime and decrease disruption to your building flow.</p>
  
  <p>Zadec Elevator continues to provide the highest amount of scheduled maintenance time in the elevator industry. We believe in preventive maintenance, rather than breakdown maintenance; our goal is to avert problems before they occur. We schedule routine maintenance during off-peak times to minimize downtime and decrease disruption to your building flow.</p>      </div>
      </div>
    
      <div className='service-location' id='third'>
        <h1>SERVICE  <span style={{color:"red"}}> LOCATIONS</span> </h1>
      
      <div className='serv-img'>
        <img src='amd-.png' ></img>
        <div className='serv-title'>
        <h2>AHMEDABAD</h2>
        </div>
        </div>
      </div>
      
      </div>
  )
}
