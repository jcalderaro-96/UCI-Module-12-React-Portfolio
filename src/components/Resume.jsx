// src/components/Resume.jsx

function Resume() {
  return (
    <section>
      <h2>Resume</h2>                                         {/* Section title */}
      <p>
        <a href="/resume.pdf" download>Download my resume</a> {/* Link to downloadable resume */}
      </p>
      <h3>Proficiencies</h3>                                  {/* Proficiencies heading */}
      <ul>
        <li>HTML</li>                                         {/* Skill */}
        <li>CSS</li>                                          {/* Skill */}
        <li>JavaScript</li>                                   {/* Skill */}
        <li>React</li>                                        {/* Skill */}
        <li>Node.js</li>                                      {/* Skill */}
        <li>Express</li>                                      {/* Skill */}
        <li>MongoDB</li>                                      {/* Skill */}
        <li>Git</li>                                          {/* Skill */}
      </ul>
    </section>
  )
}

export default Resume                                       // export Resume component

// end of file
