// src/components/Project.jsx

function Project({ title, image, deployedLink, repoLink }) {   // props for project info
  return (
    <div className="project">
      <h3>{title}</h3>                                        {/* project title */}
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={`${title} screenshot`} />      {/* clickable image to deployed app */}
      </a>
      <p>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </p>
    </div>
  )
}

export default Project                                       // export Project component

// end of file
