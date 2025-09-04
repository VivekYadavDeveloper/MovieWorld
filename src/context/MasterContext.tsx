/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { MasterDataContext } from '@/type/MasterContextType'
import React, { createContext, ReactNode, useEffect, useState } from 'react'


const defaultContextValue: MasterDataContext = {
  movies: []
}

const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = "b63e955afbf443c9323b45b9c81c3d68"

/* Create a hooks in react/nextjs to update the value */
export const MasterContext = createContext<MasterDataContext>(defaultContextValue);

interface MasterContextProps {
  children: ReactNode;
}

const MainContext: React.FC<MasterContextProps> = ({ children }) => {


  const [movies, setMovies] = useState<any[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);
  const [movieOrTv, setMovieOrTv] = useState("movie");
  const [trendingOption, setTrendingOption] = useState("top_rated");

  useEffect(
    () => {
      const fetchData = async () => {
        setLoading(true)
        try {

          const response = await fetch(`${BASE_URL}/${movieOrTv}/${trendingOption}?api_key=${API_KEY}`)
          if (!response.ok) {
            const errorText = await response.text();
            console.error("Response Error:", errorText)
            throw new Error(`Network Response Was Not Ok: ${response.statusText}`)

          }
          const data = await response.json()
          setMovies(data.results)


        } catch (error) {
          setError(error as Error)
        } finally {
          setLoading(false)
        }
      };
      fetchData()
    }, [movieOrTv, trendingOption]
  );



  const contextValue: MasterDataContext = {
    movies,
  }
  return (
    <MasterContext.Provider value={contextValue}>{children}</MasterContext.Provider>
  )
}

export default MainContext