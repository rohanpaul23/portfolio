import React from 'react'
import "./education.css"
import educationDetails from "./educationDetails";
import Separator from "../../common/separator/Separator"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import {MdWork,MdSchool} from "react-icons/md"

const Education = () => {
    return (
        <div className="education">
        <Separator/>
        <h1 className="section_title">Timeline</h1>
        <VerticalTimeline>
          {educationDetails.map((element) => {
            let isWorkIcon = element.icon === "work";
            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                icon={isWorkIcon ? <MdWork /> : <MdSchool />}
                iconClassName={"test_class"}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description">{element.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    )
}

export default Education
