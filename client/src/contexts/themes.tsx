import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  useEffect,
} from "react";

const initalThemeState = {
  theme: "light",
  setTheme: (value: string) => null,
} as {
  theme: "light" | "dark";
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
};

const ThemeContext = createContext(initalThemeState);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(initalThemeState.theme);

  const localStorage = window.localStorage;

  useEffect(() => {
    const savedThemeLocal = localStorage.getItem("globalTheme");

    if (!!savedThemeLocal) {
      setTheme(savedThemeLocal as "light" | "dark");
    }
  }, [localStorage]);

  useEffect(() => {
    localStorage.setItem("globalTheme", theme);
  }, [localStorage, theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme--${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
