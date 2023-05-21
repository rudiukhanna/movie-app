function Genre ({ genres, highlightSelection, handleGenreSelect }) {
    return (
        <section className="genres">
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
        </section>
    );
}

export default Genre;