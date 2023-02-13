import React from "react";
import './style.scss'
import PageHeader from "../../components/PageHeader";
import { GiSkills } from "react-icons/gi";
import { Line } from "rc-progress";
import { skillsData } from './skillsData'
import { Animate } from "react-simple-animate";

function Skills() {
  return (
    <>
      <section className="skills">
        <PageHeader name="Skills" icon={<GiSkills />} />
        <Animate 
        play
        duration = {1}
        delay = {.1}
        start = {{
          transform : 'translateX(-250px)'
        }}
        end = {{
          transform : 'translateX(0px)'
        }}
        >
          <div className="skills-container">
          {
            skillsData.map((item,key)=>{
              return (
                <div key={key} className="skills-container-innerContent">
                  <h1>{item.label}</h1>
                  {
                    item.data.map((itemData,key)=>{
                      return (
                        <div key={key} className="progressBar">
                           <p>{itemData.skillName}</p>
                           <Line 
                           strokeColor="var(--selected-theme-main-color)"
                           strokeLinecap="squire"
                           strokeWidth='2'
                           trailWidth='2'
                           percent={itemData.percentage}
                           />
                        </div>
                      )
                    })
                  }
                  </div>
              )
            })
          }
        </div>
        </Animate>
      </section>
    </>
  );
}

export default Skills;
