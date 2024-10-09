import React, { useState, useEffect } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

export default function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check the initial theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className="w-full mx-auto border-b-2 border-gray-100 shadow-lg dark:bg-gray-800">
        <div className="w-11/12 mx-auto my-5">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold dark:text-white">
              Where in the world?
            </h1>
            <button
              onClick={toggleDarkMode}
              className=" items-center space-x-2 md:flex lg:flex sm:hidden hidden"
              aria-label="Toggle Dark Mode"
            >
              <MdOutlineDarkMode className="text-xl dark:hidden" />
              <CiLight className="text-2xl font-bold hidden dark:block" />
              <span className="dark:text-white">
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </span>
            </button>
            <MdOutlineDarkMode
              className="text-xl lg:hidden md:hidden sm:inline-block dark:text-white"
              aria-hidden="true"
              onClick={toggleDarkMode}
            />
          </div>
        </div>
      </div>
    </>
  );
}
