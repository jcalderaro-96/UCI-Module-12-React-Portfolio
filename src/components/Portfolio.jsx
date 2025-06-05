import React from 'react';
import Project from './Project';

const projects = [
  {
    title: 'Project One',
    image: 'https://via.placeholder.com/300x200',
    deployedUrl: 'https://example.com/project-one',
    repoUrl: 'https://github.com/username/project-one',
  },
  {
    title: 'Project Two',
    image: 'https://via.placeholder.com/300x200',
    deployedUrl: 'https://example.com/project-two',
    repoUrl: 'https://github.com/username/project-two',
  },
  // Add 4 more projects here
];

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedUrl={project.deployedUrl}
            repoUrl={project.repoUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
