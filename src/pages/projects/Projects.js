import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { greeting, projectsHeader } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import { repos } from "../../portfolio";
import ProjectCard from "./ProjectCard.js";
import projectsData from "../../shared/opensource/projects.json";

const Projects = ({ theme, onToggle }) => {
  const [projectsArray, setProjectsArray] = useState([]);

  useEffect(() => {
    // Load projects from local JSON file
    setProjectsArray(projectsData.data);
  }, []);

  return (
    <div>
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <div className="projects-main">
        <div className="projectcards cardcontainer">
          {projectsArray.length
            ? projectsArray.map((project, index) => (
                <ProjectCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  value={project}
                  deployURL={repos.deployURL}
                  hostedURL={repos.hostedURL}
                  theme={theme}
                />
              ))
            : null}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />

        <Footer theme={theme} onToggle={onToggle} />
        <TopButton theme={theme} />
      </div>
    </div>
  );
};

export default Projects;
