import React from "react";
import { Animate } from "react-simple-animate";
import Typewriter from 'typewriter-effect';
import "./style.scss";
import {useNavigate} from "react-router-dom"
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <section className="home">
        <div className="home-textContainer">
          <h1>
            Hello I'm Shuaib Siddiqui
            <br />
            <Typewriter
            options={{
              strings: ["Front End Developer...", "Back End Developer...", "Full Stack Developer...", "UX-UI Designer"],
              autoStart: true,
              loop: true,
            }}
          />
          </h1>
        </div>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(600px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact-me">
            <div className="home-btn-container">
              <button onClick={()=>navigate("/contact")}>Hire Me</button>
              <button>Download Resume</button>
            </div>
            <div className="home-social-icons">
              <ul>
                <li>
                  <a href="https://fb.me/sbsidd">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/sbsidd17">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/sbsidd">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/shuaibsiddiquii">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="https://t.me/shuaib_siddiqui">
                    <FaTelegram />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/sbsidd17">
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Animate>
      </section>
    </>
  );
}

export default Home;
