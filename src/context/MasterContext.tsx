/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { MasterDataContext } from "@/type/MasterContextType";
import React, { createContext, ReactNode, useEffect, useRef, useState } from "react";

const defaultContextValue: MasterDataContext = {
  movies: [],
  page: 1 /* pagination intial state */,
  searchResult: [],
  sliderData: [],
  similarMovies: [],
  singleMovie: {},
  movieId: "",
  detailsType: "movie",
  movieOrTV: "movie",

  setPage: () => {},
  setQuery: () => {},
  setMovieId: () => {},
  setMovieOrTV: () => {},
  setDetailsType: () => {},
  setSingleMovie: () => {},
  setTrendingOption: () => {},

  loading: true,
  error: null,
};

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "b63e955afbf443c9323b45b9c81c3d68";

/* Create a hooks in react/nextjs to update the value */
export const MasterContext =
  createContext<MasterDataContext>(defaultContextValue);

interface MasterContextProps {
  children: ReactNode;
}

const MainContext: React.FC<MasterContextProps> = ({ children }) => {
  const [singleMovie, setSingleMovie] = useState<{}>({});
  const [movies, setMovies] = useState<any[]>([]);
  const [searchResult, setsearchResult] = useState<any[]>([]);
  const [sliderData, setSliderData] = useState<any[]>([]);
  const [similarMovies, setSimilarMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  /* For Pagination */
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [movieOrTV, setMovieOrTV] = useState<"movie" | "tv">("movie");
  const [trendingOption, setTrendingOption] = useState("top_rated");
  const [detailsType, setDetailsType] = useState<"movie" | "tv">("movie");
  const [movieId, setMovieId] = useState<string>("");
const prevTrendingOptionsRef = useRef<string>(trendingOption);


  /* Fetch Data For Front Screen */
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${BASE_URL}/${movieOrTV}/${trendingOption}?api_key=${API_KEY}&page=${page}`
        );
        if (!response.ok) {
          const errorText = await response.text();
          console.error("Response Error:", errorText);
          throw new Error(
            `Network Response Was Not Ok: ${response.statusText}`
          );
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    /* / Check if trendingOptions has changed, if so, reset page to 1 */
    if (prevTrendingOptionsRef.current !== trendingOption) {
      setPage(1);
    }

    // Update the previous trendingOptions ref
    prevTrendingOptionsRef.current = trendingOption;
    fetchData();
  }, [movieOrTV, page, trendingOption]);

  /* Fetch Data For Other Screen */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`
        );
        if (!response.ok) {
          const errorText = await response.text();
          console.error("Response Error:", errorText);
          throw new Error(
            `Network Response Was Not Ok: ${response.statusText}`
          );
        }
        const data = await response.json();
        setSliderData(data.results);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  /* Search Fetch Data */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
        );
        if (!response.ok) {
          const errorText = await response.text();
          console.error("Response Error:", errorText);
          throw new Error(
            `Network Response Was Not Ok: ${response.statusText}`
          );
        }
        const data = await response.json();
        setsearchResult(data.results);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  /* Check Similar Movie Fetch Data */
  useEffect(() => {
    const fetchSimilarMovies = async () => {
      if (movieId) {
        try {
          const response = await fetch(
            `${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setSimilarMovies(data.results);
        } catch (error) {
          setError(error as Error);
          console.error("Fetch error:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchSimilarMovies();
  }, [movieId]);

  const contextValue: MasterDataContext = {
    movies,
    setMovieOrTV,
    searchResult,
    sliderData,
    similarMovies,
    loading,
    error,
    detailsType,
    movieOrTV,
    singleMovie,
    movieId,
    setTrendingOption,
    setQuery,
    setDetailsType,
    setMovieId,
    setSingleMovie,
    setPage,
    page,
  };
  return (
    <MasterContext.Provider value={contextValue}>
      {children}
    </MasterContext.Provider>
  );
};

export default MainContext;
