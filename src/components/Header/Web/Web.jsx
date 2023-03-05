import React from 'react'
import  "./web.css"
import { GiSkills } from "react-icons/gi"; 
import { MdWork,MdContactMail} from "react-icons/md"; 
import { HiUser } from "react-icons/hi"; 

import Projects from "./Projects"


const Web = () => {
    return (
        <div className="web">
         <div className="web_option">
                <a href='#about'>
                        About
                        <HiUser/>
                    </a>
            </div>
            <div className="web_option">
                <a href='#education'>
                        Education And Experience
                        <MdWork/>
                    </a>
            </div>
            <div className="web_option">
                <a href='#projects'>
                
                        Projects
                        <Projects/>
                    {/* <IconContext.Provider value={{ color: 'white' }}>  
                            <GrProjects/>
                    </IconContext.Provider> */}
                    
                </a>
            </div>
            <div className="web_option">
            <a href='#skills'>
                        Skills
                    <GiSkills/>
                </a>
            </div>
            {/* <div className="web_option">
            <a href='#work'>
                    Work
                    <MdWork/>
                </a>
            </div> */}
            <div className="web_option">
            <a href='#contact'>
                        Contact
                    <MdContactMail/>
                </a>
            </div>  
        </div>
    )
}

export default Web
