// src/App.jsx

import { useState } from 'react'                        // import useState hook
import Header from './components/Header'                // import Header component
import Footer from './components/Footer'                // import Footer component
import About from './components/About'                  // import About component
import Portfolio from './components/Portfolio'          // import Portfolio component
import Contact from './components/Contact'              // import Contact component
import Resume from './components/Resume'                // import Resume component

function App() {
  const [currentSection, setCurrentSection] = useState('About')   // state to track current section

  // function to render the selected section component
  const renderSection = () => {
    switch (currentSection) {
      case 'About':
        return <About />
      case 'Portfolio':
        return <Portfolio />
      case 'Contact':
        return <Contact />
      case 'Resume':
        return <Resume />
      default:
        return <About />
    }
  }

  return (
    <>
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />  {/* header with navigation */}
      <main>
        {renderSection()}                                                            {/* render selected section */}
      </main>
      <Footer />                                                                    {/* footer */}
    </>
  )
}

export default App                                                                 // export App component

// end of file
