import React from 'react'
import "./skillcard.css"

const SkillCard = ({skillItem}) => {
  return (
    <div className="skill_card">
     {skillItem.icon !== "" && <div className="skill_icon">{skillItem.icon}</div>} 
      <label className="skill_name">{skillItem.name}</label>
    </div>
  )
}

export default SkillCard
