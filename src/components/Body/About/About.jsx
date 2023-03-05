import React from 'react'
import "./about.css"
// import ProfilePicture from "../../../assets/coding.png"
import Developer from "../../../assets/Developer.gif"
import Resume from  "../../../assets/resume.pdf"
import {HiOutlineDownload} from "react-icons/hi"
import { IconContext } from "react-icons"; 


const About = () => {
    return (
        <div className="about">
            <div className="about_top">
                <div className="about_info">
                    Hey there 🙋‍I am <span className="info_name">Rohan Paul</span><br/> working as a Software Engineer mainly on front-end.
                </div>
                <div className="about_photo">
                    <img src={Developer} className="picture" alt={"Profile"}/>
                </div>
            </div>
            <div className="download_section">
            <div className="download">
                    <a download href={Resume}>
                    Download Resume
                    <IconContext.Provider value={{ size: "24px" }}>  
                        <HiOutlineDownload/>
                    </IconContext.Provider>
                        
                    </a>
            </div>
            </div>
        </div>
    )
}


export default About
