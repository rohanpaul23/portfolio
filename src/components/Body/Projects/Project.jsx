import React from 'react'
import "./projects.css"
import  ProjectCard  from "./ProjectCard";
import { ProjectData } from "../../../data/projects";
import Separator from "../../common/separator/Separator"


const Project = () => {
    const data = ProjectData;
    return (
        <div className="projects">
            <Separator/>
            <label className="section_title">Projects</label>
            <div className="project_items">
            {data.map((project)=>{
                return <ProjectCard project={project}/>
            })}
            </div>
        </div>
    )
}

export default Project
