import { render, fireEvent } from "@testing-library/react";
import Genre from "../components/Genre";

test('renders genres correctly', () => {
    const genres = [
        { id: 1, name: 'Action' },
        { id: 2, name: 'Comedy' },
        { id: 3, name: 'Drama' },
      ];

    const selectedGenreId = 2;
    const highlightSelection = (genreId) => (genreId === selectedGenreId ? ' highlighted' : '');

    const handleGenreSelect = jest.fn();
  
    const { getByText } = render(
      <Genre
        genres={genres}
        highlightSelection={highlightSelection}
        handleGenreSelect={handleGenreSelect}
      />
    );
  
    genres.forEach((genre) => {
      const genreTag = getByText(genre.name);
      expect(genreTag).toBeInTheDocument();
    });
  
    const genreTag = getByText(genres[0].name);
    fireEvent.click(genreTag);
  
    expect(handleGenreSelect).toHaveBeenCalledTimes(1);
    expect(handleGenreSelect).toHaveBeenCalledWith(genres[0].id);

})