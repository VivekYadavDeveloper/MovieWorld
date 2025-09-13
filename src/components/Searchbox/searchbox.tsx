/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useRef, useState } from "react";
import SearchResultCard from "../SearchResultCard/SearchResultCard";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "b63e955afbf443c9323b45b9c81c3d68";

export const SearchBox = () => {
  const [results, setResults] = useState<any[]>([]);
  const [response, setResponse] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResponse(event.target.value);
  };

  const clearInput = () => {
    setResponse("");
    setResults([]);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!response) {
        setResults([]);
        return;
      }

      try {
        const res = await fetch(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${response}`
        );
        const data = await res.json();
        console.log(`Search Api:${data.response}`);
        setResults(data.results || []);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [response]);

  return (
    <>
      <div className="mx-auto max-w-xs relative z-20">
        <div>
          <div className="relative">
            <div className="absolute inset-y-0 right-0 flex items-center px-2.5">
              {response && (
                <button
                  className="border w-5 h-5 flex justify-center items-center rounded-full bg-red-400 hover:bg-red-500 active:bg-red-700"
                  onClick={clearInput}
                >
                  X
                </button>
              )}
            </div>
            <input
              ref={inputRef}
              type="text"
              className="py-1 px-4 text-white placeholder:text-gray-600 block w-full rounded-md border-gray-300 pr-10 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 "
              //   className="block w-full rounded-md border-gray-300 pr-10 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
              placeholder="Search Movie, Series, Tv Shows"
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* Search Container */}
        {response && (
          <div className="p-2 md:w-[600px] min-w-[260px] h-[450px] md:h-[550px] bg-base-300 absolute right-0 overflow-auto rounded-md">
            {results.map((movie, index) => (
              <SearchResultCard key={index} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default SearchBox;
