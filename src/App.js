import Footer from "./components/Footer";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "api_key=c28f2b3a5f12a97c881515e0374f688c";
const API_URL = `${BASE_URL}movie/popular?${API_KEY}`;
const API_SEARCH = `${BASE_URL}search/movie?${API_KEY}`;
const API_YEAR = `${BASE_URL}discover/movie?${API_KEY}`;

function App() {
  return (
    <>
      
      <Footer/>
    </>
  );
}

export default App;
