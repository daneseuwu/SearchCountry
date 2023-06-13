"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Loading from "@/components/loading";
import Link from "next/link";

const Page = ({ params }) => {
  const [countrie, setCountrie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = params;

  const getCountries = async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
      const data = await res.json();
      setCountrie(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="flex justify-center md:px-24">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="card grid grid-cols-1 md:grid-cols-3 md:space-x-16">
          <div className="col-span-2">
            <Image
              src={countrie[0]?.flags.svg}
              alt={countrie[0]?.name.common}
              width={500}
              height={500}
              className="w-full object-cover rounded-2xl"
            />
          </div>

          <div className="text-primary px-2 py-2">
            <div className="font-bold text-4xl">{countrie[0]?.name.common}</div>
            <span>{countrie[0]?.flag}</span>
            <div className="text-sm space-y-4 pt-4">
              <p>Description : {countrie[0]?.flags.alt}</p>
              <p>Official : {countrie[0]?.name.official}</p>
              <p>Continents : {countrie[0]?.continents}</p>
              <p>Capital : {countrie[0]?.capital}</p>
              <p>Region : {countrie[0]?.region}</p>
              <p>Subregion : {countrie[0]?.subregion}</p>
              <p>Languages : {countrie[0]?.languages.spa}</p>
              <p>
                Demonyms : {countrie[0]?.demonyms.eng.m},
                {countrie[0]?.demonyms.eng.m}, {countrie[0]?.demonyms.fra.m}.
              </p>
              <p>
                <Link href={countrie[0]?.maps.googleMaps} target="_blank">
                  Google Maps,{" "}
                </Link>
                <Link href={countrie[0]?.maps.openStreetMaps} target="_blank">
                  Open Street Maps
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
