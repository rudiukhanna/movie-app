import { render, fireEvent } from '@testing-library/react';
import Favorites from '../components/Favorites';

test('renders favorites correctly', () => {
  const favorites = [
    {
      id: 1,
      title: 'Movie 1',
      poster_path: '/poster1.jpg',
    },
    {
      id: 2,
      title: 'Movie 2',
      poster_path: '/poster2.jpg',
    },
  ];

  const onRemove = jest.fn();

  const { getByAltText, getByTestId } = render(
    <Favorites favorites={favorites} onRemove={onRemove} />
  );

  const movieImages = favorites.map((movie) =>
    getByAltText(movie.title)
  );

  expect(movieImages.length).toBe(favorites.length);

  const removeButtons = favorites.map((movie) =>
    getByTestId(`remove-button-${movie.id}`)
  );

  expect(removeButtons.length).toBe(favorites.length);

  fireEvent.click(removeButtons[0]);
  expect(onRemove).toHaveBeenCalledTimes(1);
  expect(onRemove).toHaveBeenCalledWith(favorites[0].id);
});
