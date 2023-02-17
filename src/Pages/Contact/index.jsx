import React from "react";
import PageHeader from "../../components/PageHeader";
import { RiContactsFill } from "react-icons/ri";
import { Animate } from "react-simple-animate";
import "./style.scss";

function Contact() {
  return (
    <section className="contact">
      <PageHeader name="Contact Me" icon={<RiContactsFill />} />
      <div className="contact-container">
        <div className="contact-container-content">
          <Animate
            play
            duration={2}
            delay={0.1}
            start={{
              transform: "translateX(-25%)",
            }}
            end={{
              transform: "translateX(0%)",
            }}
          >
            <div className="contact-container-content-heading">
              <h1>Let's talk</h1>
            </div>
          </Animate>
          <Animate
            play
            duration={3}
            delay={0.1}
            start={{
              transform: "translateX(60%)",
            }}
            end={{
              transform: "translateX(0%)",
            }}
          >
            <div className="contact-container-content-formWrapper">
              <div className="contact-container-content-formWrapper-form">
                <div className="name">
                  <input type="text" className="nameInput" name="name" />
                  <label htmlFor="name" className="nameLabel">
                    Name
                  </label>
                </div>
                <div className="email">
                  <input type="text" className="emailInput" name="email" />
                  <label htmlFor="email" className="emailLabel">
                    Email
                  </label>
                </div>
                <div className="description">
                  <textarea
                    name="description"
                    className="descriptionInput"
                    rows="5"
                  ></textarea>
                  <label htmlFor="description" className="descriptionLabel">
                    Description
                  </label>
                </div>
              </div>
              <button>Submit</button>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}

export default Contact;
