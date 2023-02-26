import React from "react";
import {
  FaInfoCircle,
  FaDatabase,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiExpress } from 'react-icons/si';
import { Animate } from "react-simple-animate";
import PageHeader from "../../components/PageHeader";
import { personalinfo } from "./personalinfo";
import "./style.scss";

function About() {
  return (
    <>
      <section className="about-section">
        <div className="header">
          <PageHeader name="About Me" icon={<FaInfoCircle />} />
        </div>
        <div className="about-content">
          <div className="right-section">
            <Animate
              play
              duration={1}
              delay={0.1}
              start={{
                transform: "translateX(-90%)",
              }}
              end={{
                transform: "translateX(0%)",
              }}
            >
              <h1>Full Stack Developer</h1>
              <p>
                As an individual passionate about coding, I have spent countless
                hours honing my skills and pursuing my dream of becoming a
                proficient and accomplished programmer. While I do not hold a
                traditional degree in coding or computer science, I have
                developed a natural talent for this craft and have become
                proficient in various programming languages. I possess a keen
                eye for detail and a talent for problem-solving, which enables
                me to develop innovative and effective coding solutions. My
                passion for coding has allowed me to stay up-to-date with the
                latest industry trends, and I am always seeking out new
                challenges to develop my skills further. As a self-taught coder,
                I have gained a unique perspective on the field, and I am
                confident that my creative approach and dedication will enable
                me to bring fresh ideas and perspectives to any team. I am
                excited to continue my career in coding and to make valuable
                contributions to any organization that values dedication, hard
                work, and innovation.
              </p>
            </Animate>
            <Animate
              play
              duration={1}
              delay={0.1}
              start={{
                transform: "translateX(100%)",
              }}
              end={{
                transform: "translateX(0%)",
              }}
            >
              <h1>Personal Information</h1>
              <ul>
                {personalinfo.map((item, key) => {
                  return (
                    <li key={key}>
                      {item.label} : {item.value}
                    </li>
                  );
                })}
              </ul>
            </Animate>
          </div>

          <div className="left-section">
            <Animate
              play
              duration={1}
              delay={0.1}
              start={{
                transform: "translateX(100%)",
              }}
              end={{
                transform: "translateX(0%)",
              }}
            >
              <div className="left-section-container">
                <div>
                  <FaReact size={64} />
                </div>
                <div>
                  <SiExpress size={64} />
                </div>
                <div>
                  <FaDatabase size={64} />
                </div>
                <div>
                  <FaNodeJs size={64} />
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
