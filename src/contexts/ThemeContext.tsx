import React from 'react';

interface ThemeContextProps {
  theme: string,
  toggleTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => {}
});

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const savedTheme = window.localStorage.getItem('theme');
  const [theme, setTheme] = React.useState(savedTheme || 'light');

  React.useEffect(() => {
    window.localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  function toggleTheme() {
    setTheme(prevState => prevState === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
};

export const useTheme = () => React.useContext(ThemeContext);