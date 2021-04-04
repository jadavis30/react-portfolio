import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav'


function Header({ currentPage, setCurrentPage }) {
  const pages = ['About', 'Portfolio', 'Resume', 'Contact'];

  useEffect(() => {
    document.title =currentPage;
  }, [currentPage]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/">
          Jared Davis
        </a>
      </h2>
      <Nav defaultActiveKey="/About" as="ul">
        { pages.map( link =>(
          <Nav.Link className={`${currentPage === link && 'navActive'}`} ley={link}>
            <span onClick={() => setCurrentPage(link)} >{link}</span></Nav.Link>
        ))}
      </Nav>
    </header>
  );
}

export default Header;
