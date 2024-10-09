import React, { useEffect, useState } from "react";
const url = "https://restcountries.com/v3.1/all";
export default function Filter() {
  const [countries, setCountries] = useState([]);
  const [record, setRecord] = useState([]);

  const fetchCountriesData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
    setRecord(data);
  };

  useEffect(() => {
    fetchCountriesData();
  }, []);
  const filterFun = (e) => {
    setRecord(
      data.filter((f) => f.name.toLowerCase().includes(e.target.value))
    );
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="w-[80%] mx-auto pt-8 mb-16 xl:flex md:flex lg:flex justify-between sm:block  dark:bg-gray-800 dark:text-white">
        <div className="w-[100%] ">
          {/* <IoMdSearch className="text-2xl " /> */}
          <input
            placeholder="Search for a country..."
            className="input shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl xl:w-[30%] lg:w-[30%] md:w-[40%]   w-[80%] transition-all  md:focus:w-[50%] lg:focus:w-[40%] xl:focus:w-[40%] outline-none"
            name="search"
            type="search"
            onChange={filterFun}
          />
        </div>
        <div className="dropdown relative my-3 inline-flex md:w-[22%] xl:w-[22%] lg:w-[20%]">
          <button
            type="button"
            onClick={toggleDropdown}
            className="dropdown-toggle inline-flex justify-center items-center gap-2 py-2 px-6 text-sm   text-black bg-white border-2 rounded-md cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-white"
          >
            Filter by Region
            <svg
              className={` h-2.5 text-black transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div
              id="dropdown-default"
              className="dropdown-menu rounded-lg shadow-lg bg-white absolute top-12 right-3 w-44 mt-2 lg:top-16 md:top-14 "
              aria-labelledby="dropdown-default"
            >
              <ul className="py-2">
                <li>
                  <a
                    className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                    href="#"
                  >
                    Africa
                  </a>
                </li>
                <li>
                  <a
                    className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                    href="#"
                  >
                    America
                  </a>
                </li>
                <li>
                  <a
                    className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                    href="#"
                  >
                    Asia
                  </a>
                </li>
                <li>
                  <a
                    className="block px-6 py-2 hover:bg-gray-100 text-gray-900 font-medium"
                    href="#"
                  >
                    Europe
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
