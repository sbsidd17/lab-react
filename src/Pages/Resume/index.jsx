import React from "react";
import PageHeader from "../../components/PageHeader";
import { FaBlackTie, FaBriefcase, FaSchool } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./style.scss";
import { educationData, experienceData } from "./data";

function Resume() {
  return (
    <div className="resume">
      <PageHeader name="My Resume" icon={<FaBlackTie />} />
      <div className="resume-container">
        <div className="resume-container-workExperience">
          <div className="heading"><h1>Experience</h1></div>
          <VerticalTimeline layout={"1-column-left"}
          lineColor={"var(--selected-theme-main-color)"}>
            <div className="resume-container-workExperience-item">
              {experienceData.map((item, key) => {
                return (
                  <div key={key}>
                    <VerticalTimelineElement
                      icon={<FaBriefcase />}
                      iconStyle={{
                        background: "var(--selected-theme-bg-color)",
                        color: "var(--selected-theme-main-color)",
                      }}
                      contentStyle={{
                        background: "transparent",
                        border: "1px solid var(--selected-theme-main-color)",
                        padding: "30px",
                        color: "white",
                        marginBottom: "40px",
                      }}
                      contentArrowStyle={{
                        borderRight:
                          "7px solid  var(--selected-theme-main-color)",
                      }}
                    >
                      <h2>{item.companyName}</h2>
                      <p>{item.role}</p>
                      <p>{item.timePeriod}</p>
                    </VerticalTimelineElement>
                  </div>
                );
              })}
            </div>
          </VerticalTimeline>
        </div>
        <div className="resume-container-education">
          <div className="heading">
          <h1>Education</h1>
          </div>
          <VerticalTimeline
            layout={"1-column-left"}
            lineColor={"var(--selected-theme-main-color)"}
          >
            <div className="resume-container-education-item">
              {educationData.map((item, key) => {
                return (
                  <div key={key}>
                    <VerticalTimelineElement
                      className=""
                      iconStyle={{
                        background: "var(--selected-theme-bg-color)",
                        color: "var(--selected-theme-main-color)",
                      }}
                      icon={<FaSchool />}
                      contentStyle={{
                        background: "transparent",
                        border: "1px solid var(--selected-theme-main-color)",
                        padding: "30px",
                        color: "white",
                        marginBottom: "40px",
                      }}
                      contentArrowStyle={{
                        borderRight:
                          "7px solid  var(--selected-theme-main-color)",
                      }}
                    >
                      <h2>{item.courseName}</h2>
                      <p>{item.instituteName}</p>
                      <p>{item.year}</p>
                    </VerticalTimelineElement>
                  </div>
                );
              })}
            </div>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default Resume;
