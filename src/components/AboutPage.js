import { Navbar, Nav, Container } from "react-bootstrap";
import ThemeToggle from "./ThemeToggle";
import Footer from "./Footer";
import { useState, useEffect } from "react";

function AboutPage() {
    const storedTheme = localStorage.getItem('theme');
    const [isDarkMode, setIsDarkMode] = useState(storedTheme === 'dark');
    const toggleTheme = () => {
        const newTheme = !isDarkMode ? 'dark' : 'light';
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('theme', newTheme);
      };
    
      useEffect(() => {
        document.body.classList.toggle('dark-theme', isDarkMode);
        document.body.classList.toggle('light-theme', !isDarkMode);
      }, [isDarkMode]);
    return (
        <div>
            <Navbar>
             <Container fluid>
             <Navbar.Brand
                           href="/"
                           className="link d-flex align-items-center fs-1">
                              <svg xmlns="http://www.w3.org/2000/svg"
                                   width="30"
                                   height="30"
                                   fill="currentColor"
                                   className="bi bi-film"
                                   viewBox="0 0 16 16">
                                   <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
                              </svg>
                              MovieMania
             </Navbar.Brand>
             <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
             <Navbar.Collapse id="navbarScroll">
               <Nav 
                   className="me-auto my-2 my-lg-3"
                   style={{maxHeight:"100px"}}
                   navbarScroll></Nav>
                   </Navbar.Collapse>
                   <ThemeToggle 
                        toggleTheme={toggleTheme} 
                        isDarkMode={isDarkMode} />
                         </Container>
      </Navbar>
            <h1>Про додаток</h1>
            <p>lorem ipsum</p>
            <Footer />
        </div>
    )
}

export default AboutPage;