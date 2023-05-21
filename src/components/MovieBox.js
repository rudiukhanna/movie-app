import { Modal, show, Button } from "react-bootstrap";
import { useState } from "react";

export const API_IMG = "https://image.tmdb.org/t/p/w500/";

function MovieBox({title, poster_path, vote_average, release_date, overview, addToFavorites, id }) {

    const [show, setShow] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);

    const handleAddToFavorites = () => {
        setIsFavorite(true);   
        addToFavorites({ title, poster_path, vote_average, release_date, overview, id });
     };

    return (
        <div className="card text-center mb-3">
            <div className="card-body p-0">
              <img className="card-img-top" src={poster_path? API_IMG+poster_path: "http://via.placeholder.com/1080x1580"} alt={title} />
              <div className="card-body">
                  <button type="button" className="btn btn-outline-danger" onClick={handleShow} >View More</button>
                  <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <img className="card-img-top" style={{width:'14rem'}}src={poster_path? API_IMG+poster_path: "http://via.placeholder.com/1080x1580"} alt={title} />
                      <h3 data-testid="movie-title">{title}</h3>
                      <h4 className="bg-warning rounded w-25">IMDb: {vote_average}</h4>
                      <h5>{release_date}</h5>
                      <br></br>
                      <h6>Overview</h6>
                      <p>{overview}</p>
                      <br></br>
                      { isFavorite ? (
                        <p>This movie is already in your favorites</p>
                      )  : (
                        <button className="btn btn-outline-danger" onClick={handleAddToFavorites}>
                                Add to Favorites
                                <svg
                                      width='1em'
                                      height='1em'
                                      viewBox='0 0 16 16'
                                      className='bi bi-heart-fill'
                                      fill='red'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        fill-rule='evenodd'
                                        d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
                                      />
                                 </svg>
                        </button>
                     )}
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                  </Modal>
              </div>
            </div>
        
        </div>
    );
}

export default MovieBox;