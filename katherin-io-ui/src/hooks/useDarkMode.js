import { useState, useEffect } from "react";

export default function useDarkMode() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    localStorage.setItem("darkMode", JSON.stringify(dark));
  }, [dark]);

  return [dark, setDark];
}
