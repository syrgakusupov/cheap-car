import React from 'react';
import "../../Styles/Footer.scss"
import logo from "../../image/logo.svg"
import apple from "../../image/applstore.svg"
import google from "../../image/googlplay.svg"
import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa6"
import { PiTelegramLogo } from "react-icons/pi"
const Footer = () => {
    return (
       <footer className="footer_block">
           <div className="footer">
               <div className="footer_content">
                   <div className="footer_content_logos">
                       <img src={logo} alt=""/>
                       <h1>Арзан Машина</h1>
                   </div>
                   <div className="footer_content_stores">
                       <img src={apple} alt=""/>
                       <img src={google} alt=""/>
                   </div>
               </div>

               <div className="footer_contacts">
                   <div className="footer_contacts_adress">
                       <span>г. Бишкек ул.Гражданская 119</span>
                       <span>+996 (700) 123 456</span>
                       <span>+996 (500) 123 456</span>
                   </div>
                   <div className="footer_contacts_web">
                       <span><FaInstagram /> <p>Instagram</p></span>
                       <span><FaWhatsapp /> <p>WhatsApp</p></span>
                       <span><PiTelegramLogo /> <p>Telegram</p></span>
                   </div>
               </div>
           </div>


       </footer>
    );
};

export default Footer;