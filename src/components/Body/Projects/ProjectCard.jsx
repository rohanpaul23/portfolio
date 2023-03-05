import React from 'react'
import "./projectcard.css"
import {VscLiveShare,VscGithubInverted} from "react-icons/vsc"

const ProjectCard = ({project}) => {
    return (
        <div className="project_card">
            <div className="project_info">
                <span className="project_title">{project.title}</span>
                <div className="project_links">
                    {project.demo &&
                        <a className="project_link" href={project.demo}>
                            <div className="link_button">
                                <VscLiveShare/> Demo
                            </div>
                        </a>
                    }
                    {project.github &&
                        <a className="project_link" href={project.github}>
                            <div className="link_button">
                                <VscGithubInverted/> Github
                            </div>
                        </a>
                    }
                </div> 
                <p>{project.description}</p>  
                <div className="project_tags">
                {project.tags.map((tag)=>{
                    return <label className="tag">
                        {tag}
                    </label>
                })}
                </div>
            </div>
            <img src={project.image} className="project_photo" alt={"Rohan Paul"}/>
            
        </div>
    )
}

export default ProjectCard
