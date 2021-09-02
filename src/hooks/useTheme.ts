import { useEffect, useState } from "react";

export enum THEME {
  LIGHT = "light",
  DARK = "dark",
}

const useTheme = () => {
  const [theme, setTheme] = useState<THEME>(THEME.LIGHT);
  const colorTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [colorTheme, theme]);
  return [colorTheme, setTheme] as const;
};

export default useTheme;
