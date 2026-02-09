import React, { useState } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import developerImg from "../../assests/images/illustration_developer.svg";
import ResumeModal from "../../components/ResumeModal/ResumeModal";

const Greeting = ({ theme }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ResumeModal
        show={showModal}
        setShow={setShowModal}
        resumeLink={greeting.resumeLink}
      />

      <Fade bottom duration={2000} distance="40px">
        <div className="greet-main" id="greeting">
          <div className="greeting-main">
            <div className="greeting-text-div">
              <div>
                <h1 className="greeting-text" style={{ color: theme.text }}>
                  {greeting.title}
                </h1>
                {greeting.nickname && (
                  <h2
                    className="greeting-nickname"
                    style={{ color: theme.text }}
                  >
                    ( {greeting.nickname} )
                  </h2>
                )}
                <p
                  className="greeting-text-p subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {greeting.subTitle}
                </p>
                <SocialMedia theme={theme} />
                <div className="portfolio-repo-btn-div">
                  <Button
                    text="Resume"
                    newTab={true}
                    onClick={() => {
                      setShowModal(true);
                    }}
                    theme={theme}
                    className="portfolio-repo-btn"
                  />
                </div>
              </div>
            </div>
            <div className="greeting-image-div">
              <img
                src={developerImg}
                alt="Developer illustration"
                className="illustration-float"
              />
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Greeting;
