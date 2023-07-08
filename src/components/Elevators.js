import React from 'react';
import { FaArrowUp } from 'react-icons/fa';


export default function Elevators() {
  
  return (
    <div>
       <div className='lift-item'>
  <div className="lift">
        <div className="lift-t">
          <h1 style={{textShadow: "1px 2px 10px rgba(9, 3, 5, 0.65)"}}>Elevators</h1>
          <div className='p-ele'>
            <p><span ><a href='#manual' >Passenger-Manual</a></span>   <span> - <a href='#Auto'> Passenger-Auto</a></span>   <span> - <a href='#Capsule'>Capsule </a></span> <span> - <a href='#Hospital'>Hospital</a></span> <span> - <a href="#Machine">Machine Roomless</a></span>  <span> - <a href='#Homelift'>Home Lift</a></span> <span> - <a href='#Hydraulic'>Hydraulic</a></span><span> - <a href='#Waiter'>DumbWaiter</a></span><span> - <a href='#Pneumatic'>Pneumatic</a></span> </p> 
           
          </div>
        </div>
        <div className='lift-img'>
          <img src="lift.png" style={{width:"400px",height:"300px"}}></img>
          
        </div>
  </div>
   </div>
   <div className='p-manual' id='manual'>
    <div className='p-img'>
    <img src='https://expresselevators.co/wp-content/uploads/sites/266/2019/09/Passenger-Elevator-Manual.png'></img></div>
    <div className='p-title'>
    <h1>Passenger Elevator<span style={{color:"red"}}> Manual Door</span> </h1>
    <p>Manual Passenger Elevators for economically suited all type of Residential & Commercial Buildings depending upon the shaft size with speed / amenities up to choice of owners.</p>
    </div>
    
   </div>
  
  <div className='manu-ele-img'>
      <span title='Elevator chart'><img   src='https://expresselevators.co/wp-content/uploads/sites/266/2019/09/table1.jpg'></img></span>
      </div>
      <div className='manu-ele-img2'>
   <span title="machine room plan"> <img  src='https://expresselevators.co/wp-content/uploads/sites/266/2019/09/p1-2-300x300.jpg'></img></span>
    </div>
    {/*  */}

    <div className='p-auto' id='Auto' title='Passenger Auto Elevator'>
      <div className='p-a-img'>
    <img src='auto design.png'></img>
    <h3 style={{marginLeft:"100px"}}>CAPACITY 04 TO 20 PASSENGER</h3></div>
    <div className='p-a-title'>
    <h1>Passenger Elevator<span style={{color:"red"}}> Auto Door</span> </h1>
    <p>Our Auto door elevators are also durable by design and accurate by technology. We have a wide range of these elevators which are most reliable and designed to suit every construction requirement and provide best vertical transportation solutions, with trouble-free performance and low maintenance cost. These elevators are a perfect blend of all good features of various types of elevators. These have an excellent record of customer satisfaction.</p>
    </div>
    <div className='auto-ele-img'>
    < span title="Elevator Chart"><img   src='https://expresselevators.co/wp-content/uploads/sites/266/2019/09/table1.jpg'></img></span>
    </div>
    <div className='auto-ele-img2'>
   <span title='Auto-Elevator'> <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7r9diWNK_UKjKPXsfRbNFtjSVlsKbgUxhIpECdFnR6xibsVueNpMLGGJNBGt_HiWJuQ&usqp=CAU'></img></span>
    </div>
    </div>
   
   
    <div className='capsule' id='Capsule' title='Capsule Elevator'>
    <div className='cap-img'>
    <img src='https://expresselevators.co/wp-content/uploads/sites/266/2019/09/Capsule-Elevators.png'></img></div>
    <div className='cap-title'>
    <h1>Capsule <span style={{color:"red"}}>Elevator</span> </h1>
    <p>Construction novel and unique, beautiful appearance, superior quality and refined, the new comfortable Accurate magnificent sightseeing elevator, allowing you to enjoy the modern architecture of extraordinary charm and luxurious, the VVVF inverter-driven energy-saving configuration, carrying a silent corporate social responsibility to calm and comfortable ride experience, a unique fashion look and style of human interface settings, the full interpretation of the elevator for Accurate insights into urban life.</p>
    </div>
    
   </div>
  <div className='cap-ele-img'>
    <span title='Elevator Chart'> <img  src='https://expresselevators.co/wp-content/uploads/sites/266/2019/09/table3-1.jpg'></img></span> 
      </div>
    <div className='cap-ele-img2'>
    <span title='Machine Room Plan'> <img  src='https://expresselevators.co/wp-content/uploads/sites/266/2019/09/p3-1-300x300.jpg'></img></span>
    </div>
    {/* hospital */}
    <div className='hospital' id='Hospital' title='Hospital Elevator'>
      <div className='hosp-img'>
    <img src='hospital-elevator1.png'></img>
    <h3 >CAPACITY 04 TO 20 PASSENGER</h3></div>
    <div className='hosp-title'>
    <h1>Hospital <span style={{color:"red"}}>Elevator</span> </h1>
    <p>Install service is the prerequisite of healthcare industries. By offering excellent services, Zadec has achieved the paramount place in the service industries.<br/> <br/>Zadec bed and stretcher elevators series follow persistent compassionate thinking, By applying destination control and group control mechanism, Zadec fulfills the intellectual elevator travel and reduces the patient’s waiting period to minimum extent.</p>
    
    </div>
    
    <div className='hosp-ele-img' >
   <span title='Elevator Chart'> <img   src='https://expresselevators.co/wp-content/uploads/sites/266/2019/09/table4.jpg'></img></span>
    </div>
    <div className='hosp-ele-img2'>
    <span title='machine Room'> <img  src='https://expresselevators.co/wp-content/uploads/sites/266/2019/09/p4-2-300x300.jpg'></img></span>
    </div>
    </div>
   
{/* mrl */}
<div className='mrl' id='Machine' title='Machine Roomless Elevator'>
    <div className='mrl-img'>
    <img src='https://expresselevators.co/wp-content/uploads/sites/266/2019/09/MRL-Elevator.png'></img></div>
    <div className='mrl-title'>
    <h1>Machine Roomless <span style={{color:"red"}}>Elevator</span> </h1>
    <p>Machine room-less elevators cancel the machine room, reduces the construction cost and flexibly utilizes the effective space. The arrangement requires compact gearless motor to be placed in the lift shaft which eliminates the need of machine room.</p>
    </div>
    <div className='adv'>
      <div className='adv-img'>
    <img src="	https://expresselevators.co/wp-content/uploads/sites/266/2019/09/5machine.png" alt="" /></div>
    <ul>Advantage:</ul>
    <li>Latest technology in the world</li>
    <li>Smooth and swift in operations</li>
    <li>Flexible to all building designs</li>
    <li>Consumes less electricity</li>
    </div>
   </div>
   <div className='mrl-ele-img'>
   <span title='Elevator Chart'>   <img  src='https://expresselevators.co/wp-content/uploads/sites/266/2019/09/table5.jpg'></img></span>
      </div>
      <div className='mrl-ele-img2'>
      <span title='Lift Well Plan'>  <img  src='https://expresselevators.co/wp-content/uploads/sites/266/2019/09/p5-2-300x300.jpg'></img></span>
    </div>
{/* home */}
<div className='home' id='Homelift' title='Home Eleavator'>
      <div className='home-img'>
    <img src='MRL-Elevator1.png'></img>
    <h3 >CAPACITY 04 TO 20 PASSENGER</h3></div>
    <div className='home-title'>
    <h1>Home Lift <span style={{color:"red"}}>Single Phase</span> </h1>
    <p>Zadec Home elevator are designed to enhance the convenience at your residence, yet it is space saving, highly elegant and perfectly blends with contemporary architecture.</p>
    
    </div>
    <div className='adv-h'>
      <div className='adv-h-img'>
    <img src="https://expresselevators.co/wp-content/uploads/sites/266/2019/09/5machine.png" alt="" /></div>
    <ul>Advantage:</ul>
    <li>Latest technology in the world</li>
    <li>Smooth and swift in operations</li>
    <li>Flexible to all building designs</li>
    <li>Consumes less electricity</li>
    </div>
   <div className='home-ele-img'>
   <span title='Elevator Chart'>  <img   src='https://expresselevators.co/wp-content/uploads/sites/266/2019/09/table5.jpg'></img></span>
    </div>
    <div className='home-ele-img2'>
    <span title='Lift Well Plan'> <img  src='	https://expresselevators.co/wp-content/uploads/sites/266/2019/09/p5-2-300x300.jpg'></img></span>
    </div>
    </div>


    <button><a href="#top" id="btn"><FaArrowUp/></a></button>
    {/* hydrolic */}
    <div className='mrl' id='Hydraulic' title='Hydraulic Elevator'>
    <div className='mrl-img'>
    <img src='	https://expresselevators.co/wp-content/uploads/sites/266/2019/09/Hydraulic-Elevator.png'></img></div>
    <div className='mrl-title'>
    <h1>Hydraulic <span style={{color:"red"}}>Elevator</span> </h1>
    <p><ul>
      <h2>Instructions</h2>
      <li>Machine Room Not Required.</li>
      <li>Electric Power Not Required in Down Direction.</li>
      <li>No Maintenance.</li>
      <li>Easy & Fast Installation</li>
      </ul></p>
    </div>
    <div className='adv'>
      <div className='adv-img'>
    <img src="	https://expresselevators.co/wp-content/uploads/sites/266/2019/09/5machine.png" alt="" /></div>
    <ul>Advantage:</ul>
    <li>Latest technology in the world</li>
    <li>Smooth and swift in operations</li>
    <li>Flexible to all building designs</li>
    <li>Consumes less electricity</li>
    </div>
   
  <div className='h-ele-img' >
  <span title='Elevator Chart'> <img   src='https://expresselevators.co/wp-content/uploads/sites/266/2019/09/table5.jpg'></img></span>
      </div>
      <div className='h-ele-img2'>
      <span title='Drawing'>  <img  src='https://expresselevators.co/wp-content/uploads/sites/266/2019/09/p7-5-300x300.jpg'></img></span>
    </div>
    </div>
     {/* dumb */}
    <div className='dumb' id='Waiter' title='Dumbwaiter Elevator'>
      <div className='dumb-img'>
    <img src='Dumbwaiter.png'></img>
    <h3 >CAPACITY 04 TO 20 PASSENGER</h3></div>
    <div className='dumb-title'>
    <h1>DumbWaiter<span style={{color:"red"}}>Elevator</span> </h1>
    <p>Zadec is a leading manufacturer of elevator / Dumbwaiters which are definitely a boon to large commercial organization like hotels, restaurants etc.
      <br/>
They can be designed to suit a specific application like carrying mails, food U other light weight stuff.
<br/>
A small freight elevator is often called a dumbwaiter, mostly used for the taking of the small items such as dishes in a 2-storey kitchen or books in a multi-storey rack assembly. We have installed dumb waiters at renowned resort, hotels, restaurants, hospitals and banks in India.
    </p>
    
  </div>
   
   
  <div className='dumb-ele-img'>

  <span title='Elevator chart'>  <img   src='https://expresselevators.co/wp-content/uploads/sites/266/2019/09/table5.jpg'></img></span>
   </div>
   <div className='dumb-ele-img2'>
   <span title='drawing'>  <img  src='		https://expresselevators.co/wp-content/uploads/sites/266/2019/09/p8-3-300x300.jpg'></img></span>
    </div>
    </div>


{/* pneumatic */}
<div className='pne' id='Pneumatic' title='pneumatic Elevator'>
    <div className='pne-img'>
    <img src='	https://expresselevators.co/wp-content/uploads/sites/266/2019/09/Pneumatic-Elevator.png'></img></div>
    <div className='pne-title'>
    <h1>Pneumatic <span style={{color:"red"}}>Elevator</span> </h1>
    <p>For home elevators specially, one type of elevator used in dwellings of up to four oors is a pneumatic elevator, also called a vacuum elevator. This home elevator doesn’t need a machine room, because it moves using a driving machine consisting of turbines that remove air from the top of the elevator car.</p>
    </div>
    <div className='pne2'>
      <div className='pne2-img'>
    {/* <img src="	https://expresselevators.co/wp-content/uploads/sites/266/2019/09/5machine.png" alt="" /> */}
    </div>
    <ul>Features:</ul>
    <li>2 - 3 & 4 Floor Stops.</li>
    <li>8-16 hours installation</li>
    <li>No excavation</li>
    <li>No energy consumption during descent and low when ascending</li>
    <li>Panoramic visibility</li>
    <li>No infrastructure required</li>
    <li>Highest safety during power outages and free fal</li>
    </div>
   </div>
   <div className='pne-ele-img'>
   <span title='Elevator Chart'>  <img   src='	https://expresselevators.co/wp-content/uploads/sites/266/2019/09/table9.jpg'></img></span>
      </div>
      <div className='pne-ele-img2'>
      <span title='Drawing'>  <img  src='https://expresselevators.co/wp-content/uploads/sites/266/2019/09/p9-1-109x300.jpg'></img></span>
    </div>
    </div>
  )
}
