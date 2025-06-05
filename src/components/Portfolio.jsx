// src/components/Portfolio.jsx
import Project from './Project'                                  // import Project component

const projects = [                                              // list of projects with info
  {
    title: 'Project One',
    image: 'https://via.placeholder.com/300x150',              // placeholder image URL
    deployedLink: 'https://example.com/project-one',            // placeholder deployed URL
    repoLink: 'https://github.com/yourusername/project-one',   // placeholder repo URL
  },
  {
    title: 'Project Two',
    image: 'https://via.placeholder.com/300x150',
    deployedLink: 'https://example.com/project-two',
    repoLink: 'https://github.com/yourusername/project-two',
  },
  {
    title: 'Project Three',
    image: 'https://via.placeholder.com/300x150',
    deployedLink: 'https://example.com/project-three',
    repoLink: 'https://github.com/yourusername/project-three',
  },
  {
    title: 'Project Four',
    image: 'https://via.placeholder.com/300x150',
    deployedLink: 'https://example.com/project-four',
    repoLink: 'https://github.com/yourusername/project-four',
  },
  {
    title: 'Project Five',
    image: 'https://via.placeholder.com/300x150',
    deployedLink: 'https://example.com/project-five',
    repoLink: 'https://github.com/yourusername/project-five',
  },
  {
    title: 'Project Six',
    image: 'https://via.placeholder.com/300x150',
    deployedLink: 'https://example.com/project-six',
    repoLink: 'https://github.com/yourusername/project-six',
  },
]

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>                                     {/* Section title */}
      <div className="projects">
        {projects.map((project) => (                         // map over projects to render Project components
          <Project
            key={project.title}                              // unique key for React
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  )
}

export default Portfolio                                   // export Portfolio component

// end of file
