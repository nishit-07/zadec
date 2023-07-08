import React from 'react'
import { Link } from 'react-router-dom';
import { FaEnvelope, FaEnvelopeOpen, FaHome, FaMap, FaMapMarked, FaMapMarkedAlt, FaMapMarker, FaMapMarkerAlt, FaPhone, FaPhoneAlt, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa';
export default function Contact() {
  return (
    <div>
   <div className='contact-sec'>
  <div className='cnt-item'>
  <div className="cont">
        <div className="t">
          <h1 style={{textShadow: "1px 2px 10px rgba(9, 3, 5, 0.65)"}}>Contact Us</h1>
          <p>Our team of customer care Zadec is ready to hear from you. <br/>
            
          </p>
        </div>
        <div className='cnt-img'>
          <img src="men--.png" style={{width:"330px",height:"220px"}}></img>
          
        </div>
  </div>
   </div>
   <div className='boxes'>
<div className='boxes-1'>
   <div  style={{fontSize:"50px",color:"blueviolet",marginLeft:"130px",marginTop:"20px"}}><FaPhoneAlt/></div>
<h2 style={{textAlign:"center"}}>Talk to zadec</h2>
<button className='btn-call' style={{marginLeft:"100px"}}><Link style={{color:"white",textDecoration:"none"}} to={`tel:${+91-8866212899}`}>Call Now</Link></button>
</div>
<div className='boxes-2'>
<div style={{fontSize:"60px",color:"green",marginLeft:"130px",marginTop:"10px"}}><FaWhatsapp/></div>
<h2 style={{textAlign:"center"}} >chat with Us</h2>
<button className='btn-call2' style={{marginLeft:"100px"}}><Link style={{color:"white" ,textDecoration:"none"}} to={`https://api.whatsapp.com/send?phone=${+8238677348}&text=${encodeURIComponent("hello")}`} target='_blank'>message</Link></button>
</div>
   </div>
   <h1 className="lets">Let's Find Out</h1>
    <div className="box-map">
       
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.1921618529623!2d72.5421534!3d23.0900604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e836f647e21e9%3A0x4be1e3a586cbcaff!2sZadec%20ELEVATOR!5e0!3m2!1sen!2sin!4v1688729508634!5m2!1sen!2sin"
        width="650"
        height="400"
        style={{ border: 1 }}
        allowFullScreen="1880px"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe> </div>
      <div className='boxes-'>
        <div className='box-1'>
        
        <h2>Our Location</h2>
        <div  className="marker" style={{color:'black',fontSize:"30px",marginLeft:"15px"}}><FaMapMarkerAlt/></div>
        <p>10/302,Ishwar Estate,
Near pushpraj residency,
Near railway crossing,
Gota, Ahemdabad</p>
        </div>
        <div className='box-2'>
         
         <h2>Email</h2>
         <div style={{color:'black',fontSize:"30px" ,marginLeft:"20px"}}><FaEnvelope/></div>
         <p ><a style={{color:"black",textDecoration:"none"}} href="mailto:zadecelevator@gmail.com">zadecelevator@gmail.com</a></p> 
        </div>
        <div className='box-3'>
       
        <h2>Phone</h2>
        <div style={{color:'black',fontSize:"30px",marginLeft:"20px"}}><FaPhoneAlt/></div>  
        <p><a style={{color:"black",textDecoration:"none"}} href={`tel:${+91-9876543211}`}>+91-9988776655</a></p>
        </div>
      </div>
    </div>

    </div>
   
  )
}
