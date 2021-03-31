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
    document.title =currentPage.name;
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
                {page.name}
              </span>
            </li>
          ))}
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Reach Out</span>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;
