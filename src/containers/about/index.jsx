import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageheadercontent";
import { Animate } from "react-simple-animate";
import "./style.scss";
import profilePicture from "../../images/imagek.png";



const personalDetails = [
  {
    label: "Name:",
    value: "KOMAL KUMARI",
  },
  {
    label: "Age:",
    value: "24",
  },
  {
    label: "Address:",
    value: "Ranchi,Jharkhand,India",
  },
  {
    label: "Email:",
    value: "komal89891@gmail.com",
  },
  {
    label: "Contact No:",
    value: "+91 7631077204",
  },
];

const jobSummary =
  "";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>I am Komal Kumari, a recent MCA graduate with a strong foundation 
              in computer science and a passion for web development. As a fresher in 
              the field, I have honed my skills in frontend development through various 
              academic projects and self-driven learning. My technical proficiency includes 
              HTML, CSS, JavaScript, and modern frameworks such as React.js. I am enthusiastic 
              about creating user-friendly, responsive, and aesthetically pleasing web interfaces.{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              
            <img src={profilePicture} alt="Komal Kumari" className="profilePicture" />
             
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;