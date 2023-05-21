import { Modal, show, Button } from "react-bootstrap";
import { useState } from "react";

export const API_IMG = "https://image.tmdb.org/t/p/w500/";

function MovieBox({title, poster_path, vote_average, release_date, overview}) {

    const [show, setShow] = useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);

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
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                  </Modal>
              </div>
            </div>
        
        </div>
    )
}

export default MovieBox;