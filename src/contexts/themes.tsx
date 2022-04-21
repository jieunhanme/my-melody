import { Dispatch, SetStateAction, createContext, useState } from "react";

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

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme--${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
