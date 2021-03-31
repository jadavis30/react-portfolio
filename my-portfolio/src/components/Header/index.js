import React, { useEffect } from 'react';


function Header(props) {
  const {
    pages = [],
    setCurrentPage,
    contactSelected,
    currentPage,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Jared Davis
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {pages.map((page) => (
            <li
              className={`mx-1 ${
                currentPage.name === page.name && !contactSelected && 'navActive'
                }`}
              key={page.name}
            >
              <span
                onClick={() => {
                  setCurrentPage(page);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(page.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
