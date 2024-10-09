import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Country() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch country data");
        }
        const countryData = await response.json();
        setCountry(countryData);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };
    fetchCountriesData();
  }, [name]);

  return (
    <>
      <div className="pt-11 ml-20  dark:bg-gray-800 dark:text-white">
        <Link to="/">
          <button
            className="bg-transparent lg:bg-white xl:bg-white md:bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
            type="button"
          >
            <div className="bg-white rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                height="25px"
                width="25px"
              >
                <path
                  d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                  fill="#11111"
                ></path>
                <path
                  d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                  fill="#11111"
                ></path>
              </svg>
            </div>
            <p className="translate-x-2 hidden lg:block xl:block md:block">
              Go Back
            </p>
          </button>
        </Link>
      </div>

      <section>
        {country.map((c) => {
          const {
            cca3,
            name: { common: countryName },
            flags: { png: flagUrl },
            population,
            region,
            subregion,
            capital,
            tld: topLevelDomain,
            currencies,
            languages,
            borders,
            nativeName,
          } = c;

          return (
            <article key={cca3} className="mt-14 mx-auto w-[87%]">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  ">
                <div>
                  <img
                    className="h-72"
                    src={flagUrl}
                    alt={`Flag of ${countryName}`}
                  />
                </div>
                <div>
                  <h2 className="mb-5 mt-3 font-bold text-3xl">
                    {countryName}
                  </h2>
                  <div className="grid grid-cols-2">
                    <div className="grid gap-1">
                      <p className="font-bold">
                        Population:{" "}
                        <span className="font-light">
                          {population.toLocaleString()}
                        </span>
                      </p>
                      <p className="font-bold">
                        Region: <span className="font-light">{region}</span>
                      </p>
                      <p className="font-bold">
                        Subregion:{" "}
                        <span className="font-light">{subregion}</span>
                      </p>
                      <p className="font-bold">
                        Capital: <span className="font-light">{capital}</span>
                      </p>
                    </div>
                    <div>
                      <p className="font-bold">
                        Top Level Domain:{" "}
                        <span className="font-light">{topLevelDomain}</span>
                      </p>
                      <p className="font-bold">
                        Currencies:{" "}
                        <span className="font-light">
                          {currencies &&
                            Object.values(currencies)
                              .map((cur) => cur.name)
                              .join(", ")}
                        </span>
                      </p>
                      <p className="font-bold">
                        Languages:{" "}
                        <span className="font-light">
                          {languages && Object.values(languages).join(", ")}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-16">
                    <p className="font-bold flex">
                      Borders Countries:
                      <span className="font-light flex  justify-center  items-center">
                        {borders.map((border) => {
                          return (
                            <ul
                              key={border}
                              className="text-sm border py-1 px-6 mx-1"
                            >
                              <li>{border}</li>
                            </ul>
                          );
                        })}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
