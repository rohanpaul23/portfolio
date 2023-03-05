import React,{useState} from 'react'
import {AiOutlineMenu} from "react-icons/ai"
import { IconContext } from "react-icons";  
import Mobile from './Mobile/Mobile';
import Web from './Web/Web';
import "./header.css"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    return (
        <div className="header">
            <div className="logo">
                Rohan Paul
            </div>
            <div className="menu">
                <div className="nav_bar">
                    <Web/>
                </div>
                <div className="collapsesd_nav_bar">
                    <div onClick={()=> setIsMenuOpen(!isMenuOpen)}>
                    <IconContext.Provider value={{ size: "24px" }}>  
                        <AiOutlineMenu/>
                    </IconContext.Provider>
                    </div>
                    <div>
                        {isMenuOpen && <Mobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
