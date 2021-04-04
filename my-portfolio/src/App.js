import React, { useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from './components/Contact';
import About from './components/About'
import Project from './components/Project';
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    const [contactSelected, setContactSelected] = useState(false);
    const [pages] = useState([
        {name: 'About'},
        {name: 'Portfolio'},
        {name: 'Resume'},
        {name: 'Reach Out!'}
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
            />
            <main>
                { renderPage(currentPage) }
            </main>
            <Footer></Footer>
        </>
    );
}

export default App;
