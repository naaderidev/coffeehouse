import React, { useState, useEffect } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

export default function ThemeSetting({ screen }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light"; // Load initial theme
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <>
      {screen === "desktop" ? (
        <div onClick={toggleTheme}>
          {theme === "dark" ? (
            <HiOutlineSun className="icon-md" />
          ) : (
            <HiOutlineMoon className="icon-md" />
          )}
        </div>
      ) : (
        <div className="child:py-1 child:px-3 text-lg text-catalan-800 dark:text-brown-100 flex flex-col items-end gap-y-3">
          <button className="flex-center gap-2" onClick={toggleTheme}>
            <span className="font-MorabbaMedium">
              {theme === "dark" ? "تم تیره" : "تم روشن"}
            </span>
            {theme === "dark" ? (
              <HiOutlineSun className="icon-md" />
            ) : (
              <HiOutlineMoon className="icon-md" />
            )}
          </button>
        </div>
      )}
    </>
  );
}
