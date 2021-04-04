import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav'
import Banner from '../../assets/headerbanner.jpg';


function Header({ currentPage, setCurrentPage }) {
  const pages = ['About', 'Portfolio', 'Resume', 'Contact'];

  useEffect(() => {
    document.title =currentPage;
  }, [currentPage]);

  return (
    //Added banner to header with backgroudImage
    <header className="flex-row px-5" style={{ backgroundImage: `url(${ Banner })`}}>
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
