import React from 'react'
import "./body.css"
import About from './About/About';
import Project from './Projects/Project';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Education from './Education/Education';

const Body = () => {
    return (
        <div className="body_section">
            <section id="about">
                <About/>
            </section>  
            <section id="education">
                <Education/>
            </section>
            <section id="projects">
                <Project/>
            </section>
            <section id="skills">
                <Skills/>
            </section>
            {/* <section id="work">
                <Work/>
            </section> */}
            <section id="contact">
                <Contact/>
            </section>
        </div>
    )
}

export default Body
