import React from 'react'
import "./contact.css"
import Separator from '../../common/separator/Separator';
import SocialLinks from '../../common/sociallinks/SocialLinks'; 
import Email from "./Email"

const Contact = () => {
    return (
        <div className="contact">
            <Separator/>
            <label className="section_title">Contact</label>
            <div className="contact_container">
                <div className="email_section">
                <Email/>
                </div>
                <div className="contact_left">
                    <p>Contact me on any of the platform</p>
                    <SocialLinks/>
                </div>
              
            </div>
        </div>
    )
}


export default Contact

