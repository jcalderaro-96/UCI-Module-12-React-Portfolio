// src/components/Navigation.jsx

function Navigation({ currentSection, onNavClick }) {           // receives currentSection and click handler
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume']  // list of nav sections

  return (
    <nav>
      <ul>
        {sections.map((section) => (
          <li key={section}>
            <button
              onClick={() => onNavClick(section)}               // call parent handler on click
              style={{
                fontWeight: currentSection === section ? 'bold' : 'normal'  // highlight current section
              }}
              aria-current={currentSection === section ? 'page' : undefined}  // accessibility
            >
              {section}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation                                    // export Navigation component

// end of file
