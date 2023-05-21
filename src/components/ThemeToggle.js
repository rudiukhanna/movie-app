function ThemeToggle({ toggleTheme, isDarkMode }) {
    return (
        <label className="switch" htmlFor="themeToggle">
        <input 
              type="checkbox"
              id="themeToggle"
              checked={isDarkMode} 
              onChange={toggleTheme}
               />
        <span className="slider"></span>
      </label>
    );
}

export default ThemeToggle;