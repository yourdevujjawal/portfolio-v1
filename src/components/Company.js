import React from "react";

const Company = ({ portfolioData }) => {
  const jobs = portfolioData;

  return jobs.map((job, index) => (
    <div className="company" key={`job-${index}`}>
      <div className="company__intro">
        <div className="company__name">{job.name}</div>
        <div className="company__designation">{job.designation}</div>
      </div>
      <div className="company__period">{job.period}</div>
      <ul className="company__works">
        {job.works.map((work, index) => {
          function workHTML() {
            return (
              <span
                className="work__desc"
                dangerouslySetInnerHTML={{ __html: `${work}` }}
              />
            );
          }

          return (
            <li className="work" key={`work-${index}`}>
              <span className="work__arrow"></span>
              {workHTML()}
            </li>
          );
        })}
      </ul>
    </div>
  ));
};

export default Company;
