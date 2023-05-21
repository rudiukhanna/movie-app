import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import Footer from "./components/Footer";


const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "api_key=c28f2b3a5f12a97c881515e0374f688c";
const API_URL = `${BASE_URL}movie/popular?${API_KEY}`;
const API_SEARCH = `${BASE_URL}search/movie?${API_KEY}`;
const API_YEAR = `${BASE_URL}discover/movie?${API_KEY}`;

function App() {
  return (
    <>
      <Navbar className="navbar" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand
                        href="/home"
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
        </Container>
      </Navbar>
      
      <Footer/>
    </>
  );
}

export default App;
