import React from "react";
import { FaInfoCircle, FaDev, FaDatabase, FaReact, FaNodeJs } from "react-icons/fa";
import PageHeader from "../../components/PageHeader";
import { personalinfo } from "./personalinfo";
import "./style.scss";

function About() {
  
  return (
    <>
      <section className="about-section">
        <div className="header">
          <PageHeader name="About Me" icon=<FaInfoCircle /> />
        </div>
        <div className="about-content">
          <div className="right-section">
            <h1>Full Stack Developer</h1>
            <p>
              Seasoned and independent Front End Developer with 5 years of
              experience in blending the art of design with skill of programming
              to deliver an immersive and engaging user experience through
              efficient website development, proactive feature optimization, and
              relentless debugging. Very passionate about aesthetics and UI
              design. It is imperative that you provide a thorough and
              professional approach to your resume. As a Front End Developer
              you'll be judged by your ability to use UX and UI concepts and
              follow design guidelines. It's about expressing your attention to
              detail and how you can help implement design ideas for your future
              employer.
            </p>
            <h1>Personal Information</h1>
            <ul>
              {
                personalinfo.map((item,key)=>{
                  return <li key={key}>{item.label} : {item.value}</li>
                })
              }
            </ul>
          </div>
          <div className="left-section">
            <div className="left-section-container">
              <div><FaReact size={64}/></div>
              <div><FaDev size={64}/></div>
              <div><FaDatabase size={64}/></div>
              <div><FaNodeJs size={64}/></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
