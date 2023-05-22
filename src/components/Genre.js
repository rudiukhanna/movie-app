function Genre ({ genres, highlightSelection, handleGenreSelect }) {
    return (
        <aside className="genres col-sm-6 col-md-12">
        <h2 className="genres_title">Genre</h2>
            <div  className="genres_tags">
              {genres.map((genre) => (
                <div
                  key={genre.id}
                  className={`genres_tags_tag${highlightSelection(genre.id)}`}
                  onClick={() => handleGenreSelect(genre.id)}
                >
                  {genre.name}
                </div>
              ))}
            </div>
        </aside>
    );
}

export default Genre;