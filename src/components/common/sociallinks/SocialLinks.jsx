import React from 'react'
import "./sociallinks.css"

import {SocialMediaData }from "./../data/social"


const SocialLinks = () => {
    const data = SocialMediaData;
    return (
        <div className="social_contact">
         {
             data.map((item)=>{
                 return(
                     <a href={item.link}>
                        <div className="social_icon_div">
                            <img src={item.icon} className="social_icon" alt="Profile"/>
                        </div>
                     </a>
                 )
             })
         }
            
        </div>
    )
}

export default SocialLinks
