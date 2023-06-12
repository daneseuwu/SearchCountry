"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

const Page = ({ params }) => {
  const [countrie, setCountrie] = useState([]);
  const { id } = params;

  const getCountries = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${id}?fullText=true`);
    const data = await res.json();
    setCountrie(data);
  };
  console.log(countrie);

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="pt-14">
     hola {id}
    </div>
  );
};

export default Page;
