import React, { useState, useEffect, useCallback } from "react";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import "./ProjectCard.css";

const ProjectCard = ({ id, theme, value }) => {
  const {
    name,
    description,
    svn_url,
    stargazers_count,
    languages_url,
    pushed_at,
    languages,
  } = value;

  const CardButtons = () => {
    return (
      <div className="custombuttongroup">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={svn_url}
          className="btn btn-outline-secondary mx-2 custombutton"
        >
          <i className="fab fa-github" /> <b>Source Code</b>
        </a>
      </div>
    );
  };

  return (
    <span>
      <Card
        className="card shadow-lg p-3 rounded project-card"
        style={{
          background: "transparent",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Card.Title as="h5">
          {(
            <b style={{ fontSize: "1em" }} className="customheading2">
              {name}
            </b>
          ) || <Skeleton />}
        </Card.Title>
        <Card.Text>
          <span
            key={name}
            className="subTitle skills-text"
            style={{
              fontSize: "1rem",
              color: theme.secondaryText,
              fontWeight: "bold",
            }}
          >
            {!description ? "" : description || <Skeleton count={3} />}{" "}
          </span>
        </Card.Text>
        {svn_url ? <CardButtons /> : <Skeleton count={2} />}

        <hr />
        {languages_url ? (
          <Language theme={theme} data={languages} repo_url={svn_url} />
        ) : (
          <Skeleton count={3} />
        )}
        {value ? (
          <CardFooter
            theme={theme}
            star_count={stargazers_count}
            repo_url={svn_url}
            pushed_at={pushed_at}
          />
        ) : (
          <Skeleton />
        )}
      </Card>
    </span>
  );
};

const Language = ({ theme, data, repo_url }) => {
  const array = [];
  let total_count = 0;
  for (let index in data) {
    array.push(index);
    total_count += data[index];
  }

  return (
    <div className="pb-3" style={{ color: theme.secondaryText }}>
      <b>Languages:</b>
      {array.length
        ? array.map((language) => (
            <a
              key={language}
              className="card-link"
              href={repo_url + `/search?l=${language}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="badge" style={{ color: theme.secondaryText }}>
                {language}:{" "}
                {Math.trunc((data[language] / total_count) * 1000) / 10} %
              </span>
            </a>
          ))
        : "code yet to be deployed."}
    </div>
  );
};

const CardFooter = ({ theme, star_count, repo_url, pushed_at }) => {
  const [updated_at, setUpdated_at] = useState("0 mints");

  const handleUpdatetime = useCallback(() => {
    const date = new Date(pushed_at);
    const nowdate = new Date();
    const diff = nowdate.getTime() - date.getTime();
    const hours = Math.trunc(diff / 1000 / 60 / 60);

    if (hours < 24) {
      if (hours < 1) return setUpdated_at("just now");
      let measurement = hours === 1 ? "hour" : "hours";
      return setUpdated_at(`${hours.toString()} ${measurement} ago`);
    } else {
      const options = { day: "numeric", month: "long", year: "numeric" };
      const time = new Intl.DateTimeFormat("en-US", options).format(date);
      return setUpdated_at(`on ${time}`);
    }
  }, [pushed_at]);

  useEffect(() => {
    handleUpdatetime();
  }, [handleUpdatetime]);

  return (
    <p className="card-text">
      <a
        href={repo_url + "/stargazers"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-dark text-decoration-none"
      >
        <span className="text-dark card-link mr-4">
          <span
            className="badge badge-dark"
            style={{ color: theme.secondaryText }}
          >
            {star_count}
          </span>
        </span>
      </a>
      <small className="" style={{ color: theme.secondaryText }}>
        Updated {updated_at}
      </small>
    </p>
  );
};

export default ProjectCard;
