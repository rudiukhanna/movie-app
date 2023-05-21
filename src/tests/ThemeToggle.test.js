import { render, fireEvent } from '@testing-library/react';
import ThemeToggle from '../components/ThemeToggle';

test('toggles theme when clicked', () => {
    const toggleTheme = jest.fn();
    const { getByRole } = render(<ThemeToggle toggleTheme={toggleTheme} isDarkMode={false} />);
  
    const checkbox = getByRole('checkbox');
    fireEvent.click(checkbox);
  
    expect(toggleTheme).toHaveBeenCalledTimes(1);
  });