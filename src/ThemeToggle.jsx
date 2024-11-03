import { useEffect, useState } from "react";
import "./ThemeToggle.css";
export default function ThemeToggle() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    // Check local storage for the saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Store the theme in local storage
    localStorage.setItem("theme", theme);
    let value = localStorage.getItem("theme");

    // Apply the theme to the body class
    document.body.className = value;

    console.log(value);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div id="checkBoxContainer">
      <label for="theme" className="theme">
        <span className="theme__toggle-wrap">
          <input
            id="theme"
            className="theme__toggle"
            type="checkbox"
            role="switch"
            checked={theme === "dark"}
            onChange={toggleTheme}
            name="theme"
          />
          <span className="theme__fill"></span>
          <span className="theme__icon">
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
          </span>
        </span>
      </label>
    </div>
  );
}
