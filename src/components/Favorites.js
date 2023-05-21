import { API_IMG } from './MovieBox.js';

function Favorites({ favorites, onRemove }) {

    return (
        <section className='favourites'>
        <div className="container pt-4">
          <h2 className="favourites_title fw-bold">My Favourites</h2>
              <div className="favourites_grid">     
                  {favorites.map((movie) => (
                    <div key={movie.title} className="card text-center mb-3 p-3">
                      <img src={API_IMG + movie.poster_path} alt={movie.title} className="card-image-top" />
                      <div className="card-body">
                      <button 
                              type="button"
                              className="btn btn-outline-danger" 
                              onClick={() => onRemove(movie.id)}
                              data-testid={`remove-button-${movie.id}`}
                              >
                                Remove
                        </button>
                    </div>
                </div>    
               ))}
            </div>
          </div>
      </section>
    );
 }

 export default Favorites;