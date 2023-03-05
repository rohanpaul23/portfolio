import React from 'react'
import { GrProjects } from "react-icons/gr"; 
import { GiSkills } from "react-icons/gi"; 
import { MdWork,MdContactMail} from "react-icons/md"; 
import { AiOutlineCloseCircle } from "react-icons/ai"; 
import { IconContext } from "react-icons";  
import "./mobile.css"
import { HiUser } from "react-icons/hi"; 

const Mobile = ({isMenuOpen,setIsMenuOpen}) => {
    return (
        <div className="mobile">
            <div className="close_icon" onClick={()=>setIsMenuOpen(!isMenuOpen)}>     
                <IconContext.Provider value={{ size: "24px" }}>  
                    <AiOutlineCloseCircle/>
                </IconContext.Provider>
            </div>
            <div className="mobile_options">
            <div className="mobile_option">
                <a href='#about'>
                        About
                        <HiUser/>
                    </a>
            </div>
            <div className="mobile_option">
                <a href='#education'>
                        Education And Experience
                        <MdWork/>
                    </a>
            </div>
            <div className="mobile_option">
                <a href='#projects'>
                        Projects
                    <GrProjects/>
                </a>
            </div>
            <div className="mobile_option">
            <a href='#skills'>
                        Skills
                    <GiSkills/>
                </a>
            </div>
            <div className="mobile_option">
            <a href='#contact'>
                        Contact
                    <MdContactMail/>
                </a>
            </div>  
            </div>

        </div>
    )
}

export default Mobile
