import Navigation from './Navigation';

function Header({ currentPage, setCurrentPage }) {
  return (
    <header>
      <h1>Developer Name</h1>
      <Navigation currentSection={currentPage} onNavClick={setCurrentPage} />
    </header>
  );
}

export default Header;
