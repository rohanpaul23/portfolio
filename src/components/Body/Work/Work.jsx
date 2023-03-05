import React from 'react'
import "./work.css"
import {WorkData} from "../../common/data/workdata"
import Separator from "../../common/separator/Separator"
import WorkCard from "./WorkCard"

const Work = () => {
   const data = WorkData
    return (
        <div className="work">
            <Separator/>
            <label className="section_title">Work</label>
            <div className="work_list">
            {
                data.map((workItem)=>{
                    return <WorkCard workItem={workItem}/>
                })
            }            
            </div>
        </div>
    )
}


export default Work
