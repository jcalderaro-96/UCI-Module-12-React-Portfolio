// src/components/Header.jsx
import Navigation from './Navigation'              // import Navigation component

function Header({ currentSection, onNavClick }) {  // Header receives currentSection and click handler as props
  return (
    <header>
      <h1>Developer Name</h1>                      {/* Developer name in header */}
      <Navigation currentSection={currentSection} onNavClick={onNavClick} /> {/* Navigation menu */}
    </header>
  )
}

export default Header                              // export Header component

// end of file
