import React, { useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from './components/Contact';
import About from './components/About'
import Project from './components/Project';
import Resume from './components/Resume';


function App() {
    const [contactSelected, setContactSelected] = useState(false);
    const [pages] = useState([
        {name: 'About'},
        {name: 'Portfolio'},
        {name: 'Resume'}
    ]);

    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        switch(currentPage) {
            case 'About':
                return <About />;
            case 'Portfolio':
                return <Project />;
            case 'Resume':
                return <Resume />;
            case 'Contact':
                return <ContactForm />;
            default:
                return <About />;        
        }
    }

    return (
        <>
            <Header
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            ></Header>
            <main>
                { renderPage(currentPage) }
            </main>
            <Footer></Footer>
        </>
    )
}

export default App;
