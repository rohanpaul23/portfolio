import React from 'react'
import "./workcard.css"
const WorkCard = ({workItem}) => {
  return (
    <div className="work_card">
        <img src={workItem.companyLogo} className="work_logo"/>
        <div className="work_info">
            <label className="company_name">{workItem.company}</label>
            <div className="work_dates">
                <label>{workItem.dateJoining}</label>-<label>{workItem.dateEnd}</label>
            </div>
            <div className="work_desc">
                {workItem.work}
            </div>
        </div>
    </div>
  )
}

export default WorkCard
