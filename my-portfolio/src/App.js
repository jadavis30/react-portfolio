import React, { useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from './components/Contact';
import About from './components/About'


function App() {
    const [contactSelected, setContactSelected] = useState(false);
    const [pages] = useState([
        {name: 'Meet Jared'},
        {name: 'My Portfolio'},
        {name: 'My Resume'}
    ]);

    const [currentPage, setCurrentPage] = useState(pages[0]);

    return (
        <div>
            <Header
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            ></Header>
            <main>
                {!contactSelected ? (
                    <>
                        <About></About>
                    </>
                ) : (
                    <ContactForm></ContactForm>
                )}
            </main>
            <Footer></Footer>
        </div>
    )
}

export default App;
