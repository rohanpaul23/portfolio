import React from 'react'
import "./skills.css"
import Separator from "../../common/separator/Separator"
import {SkillsData,ExperienceIn,ToolsUsed} from "../../common/data/skills"
import SkillCard from "./SkillCard"

const Skills = () => {
    const data = SkillsData
    const experienceIn = ExperienceIn
    const toolsUsed = ToolsUsed

    return (
        <div className="skills">
            <Separator/>
         <label className="section_title">Skills</label>
         <div className="skills_container">
            {data.map((skill)=>{
                return(
                    <div className="skills_section">
                        <label className="skills_section_title">{skill.type}</label>
                        <div className="skills_list">
                            {skill.list.map((skillItem)=>{
                               return <SkillCard skillItem={skillItem}/>
                            })}
                        </div>
                    </div>
                )
            })}
            <div className="list_section">
                <label className="skills_section_title">{experienceIn.type}</label>
                <div>   
                {/* {experienceIn.list.map((skillItem)=>{
                               return <SkillCard skillItem={skillItem}/>
                            })}                */}
                    {experienceIn.list.map((item)=>{ 
                        return <li>{item.name}</li>
                    })}
                </div>
            </div>
            <div className="list_section">
                <label className="skills_section_title">{toolsUsed.type}</label>
                <div>   
                {/* {experienceIn.list.map((skillItem)=>{
                               return <SkillCard skillItem={skillItem}/>
                            })}                */}
                    {toolsUsed.list.map((item)=>{ 
                        return <li>{item.name}</li>
                    })}
                </div>
            </div>
         </div>

        </div>
    )
}

export default Skills
