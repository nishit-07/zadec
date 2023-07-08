import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarked, FaMapMarker, FaPhone, FaTwitter, FaYoutube, } from 'react-icons/fa';
export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="z-logo">
            <img  className='set-z-logo' src="flogo.png"></img>
            <p style={{color:"rgb(0,9,52)"}}>Zadec Elevators is well known to be one of<br/> the prominent and best elevator <br/>manufacturer in Ahmadabad, Gujarat.</p>
            <h1 style={{color:"rgb(0,9,52)"}}>Follow Us</h1>
            <div className='social'>
                <div className='s-media1' >
                   <a href='' ><span className='insta'><FaInstagram/> </span></a>
                   </div>
                <div className='s-media2'>
                    < a href=""><span className='fb'><FaFacebook/></span></a>
                   
                </div>
                <div className='s-media3'>
                <a href='https://www.youtube.com/@zadecElevator' ><span className='yt'><FaYoutube/></span></a>
                    
                </div>
                <div className='s-media4'>
                <a href="https://twitter.com/ZadecElevator?t=zzlYybOvvxe4PGMD88Awwg&s=08"><span className='twit'><FaTwitter/></span></a>
                  
                </div>
            </div>
        </div>
      </div>
      <div className='contact'>
        <h1 style={{color:"rgb(0,9,52)",textDecoration:"none"}}>Contact Us</h1>
        <div className='contact-item'>
        <h4 style={{color:"rgb(0,9,52)",textDecoration:"none"}}><FaMapMarker/>  <a style={{color:"rgb(0,9,52)",textDecoration:"none",}} href='https://www.google.com/maps/place/Ahmedabad,+Gujarat/@23.0201581,72.4149291,11z/data=!4m7!1m2!2m1!1sB-406+Shyam+Residency+Apartment+NR.+SHRI+HARI+S%2FS+Ahmedabad+Ahmedabad+Gujarat+382418!3m3!1s0x395e848aba5bd449:0x4fcedd11614f6516!15sClRCLTQwNiBTaHlhbSBSZXNpZGVuY3kgQXBhcnRtZW50IE5SLiBTSFJJIEhBUkkgUy9TIEFobWVkYWJhZCBBaG1lZGFiYWQgR3VqYXJhdCAzODI0MTiSAQhsb2NhbGl0eeABAA!16zL20vMDFkODhj?entry=ttu'>&nbsp;  Ahemdabad</a></h4>
        <h4 style={{color:"rgb(0,9,52)",textDecoration:"none"}}><FaEnvelope/>   <a style={{color:"rgb(0,9,52)",textDecoration:"none"}} href="mailto:zadecelevator@gmail.com">&nbsp;  ZadecElevator@gmail.com</a> </h4>
        <h4 style={{color:"rgb(0,9,52)",textDecoration:"none"}}><FaPhone/>      <a style={{color:"rgb(0,9,52)",textDecoration:"none"}} href={`tel:${+91-9876543211}`}>&nbsp;+91-7096963666</a></h4>
        </div>
      </div>
      <div className='copy'>
      <hr/>
        <p>Copyright © 2023 Zadec Elevator:All Right Reserved</p>
      </div>
    </div>
  )
}
