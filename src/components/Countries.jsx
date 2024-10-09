import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const url = "https://restcountries.com/v3.1/all";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  const fetchCountriesData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
    // console.log(data);
  };

  useEffect(() => {
    fetchCountriesData();
  }, []);

  return (
    <>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 w-[80%] mx-auto gap-5 dark:bg-gray-800 dark:text-white">
        {countries.map((country) => {
          const {
            cca3, // Unique country code
            name: { common: countryName },
            population,
            region,
            capital,
            flags: { png: flagUrl },
          } = country;

          return (
            <div key={cca3} className="border mb-3 rounded-lg">
              <img
                src={flagUrl}
                alt={`${countryName} flag`}
                className="w-full h-32 object-cover mb-4 rounded-lg"
              />
              <h2 className="text-xl font-bold px-3">{countryName}</h2>
              <h3 className="font-semibold px-3">
                Population:{" "}
                <span className="font-light">
                  {population.toLocaleString()}
                </span>
              </h3>
              <h3 className="font-semibold px-3">
                Region: <span className="font-light">{region}</span>
              </h3>
              <h2 className="font-semibold px-3 pb-2">
                Capital:{" "}
                <span className="font-light">
                  {capital ? capital[0] : "N/A"}
                </span>
              </h2>
              <Link
                to={`/countries/${cca3}`}
                className="block bg-blue-500 text-white text-center rounded-lg py-2 mt-4"
              >
                View More
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
