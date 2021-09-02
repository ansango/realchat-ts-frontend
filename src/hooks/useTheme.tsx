import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState<string>("light");
  const colorTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [colorTheme, theme]);
  return [colorTheme, setTheme] as const;
};

export default useTheme;
