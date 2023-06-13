"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiChevronDown } from "react-icons/hi";
import { GoHeart } from "react-icons/go";
import Loading from "./loading";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getCountries() {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  const [search, setSearch] = useState("");
  function searcher(e) {
    setSearch(e.target.value);
  }

  let results = [];

  if (!countries) {
    results = countries;
  } else {
    results = countries.filter((datos) =>
      datos.name.common.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  const [readMore, setReadMore] = useState(20);
  const mostrarMasContenido = () => {
    setReadMore(readMore + 10); // Mostrar 3 elementos adicionales cada vez que se hace clic en el botón
  };


  useEffect(() => {
    getCountries();
  }, []);

  return (
    <section>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="py-12">
          <div className="flex-cols md:flex md:justify-between">
            <div className="flex justify-center">
              <input
                value={search}
                onChange={searcher}
                type="text"
                name="search"
                placeholder="El salvador"
                className="w-72 h-12 border border-slate-500/20 shadow dark:bg-slate-500/25 focus:outline-none rounded-xl py-2 px-5 text-md text-primary"
              />
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <HiChevronDown className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-2.5" />
                <select className="border border-slate-500/20 text-gray-500 w-72 h-12 shadow dark:bg-slate-500/25 focus:outline-none rounded-xl py-2 px-5 text-md  appearance-none cursor-pointer">
                  <option>Continents</option>
                  <option>Region</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-5 gap-4 pt-12">
            {results.slice(0, readMore).map((countrie) => (
              <div key={countrie.name.common} className="card shadow-md">
                <Link href={`/countrie/${countrie.cca2}`}>
                  <Image
                    src={countrie.flags.svg}
                    alt={countrie.name.common}
                    className="w-full h-36 object-cover rounded-2xl"
                    width={1000}
                    height={1000}
                  />
                </Link>

                <div className="px-2 py-1">
                  <div className="text-primary text-center font-bold">
                    {countrie.name.common}
                  </div>
                </div>

                <div className="px-2 text-[12px] text-primary pb-1">
                  <p>Capital : {countrie.capital}</p>
                  <p>Continents : {countrie.continents}</p>
                </div>
              </div>
            ))}
          </div>

          {readMore < countries.length && (
            <div className="flex justify-center  cursor-pointer pt-8">
              <HiChevronDown
                onClick={mostrarMasContenido}
                className="text-4xl text-primary"
              />
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Countries;
