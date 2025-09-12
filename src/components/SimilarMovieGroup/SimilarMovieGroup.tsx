/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import MovieCard from "../CardGroup/CardDetails/MovieCard/MovieCard";
import TvShowCard from "../CardGroup/CardDetails/TvShowCard/TvShowCard";

interface SimilarMovieGroupProps {
  movieId: string;
  mediaType: "movie" | "tv";
}
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "b63e955afbf443c9323b45b9c81c3d68";
const SimilarMovieGroup: React.FC<SimilarMovieGroupProps> = ({
  movieId,
  mediaType,
}) => {
  const [similarMovies, setSimilarMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSimilarMovies = async () => {
      if (movieId) {
        setLoading(true);
        try {
          const response = await fetch(
            `${BASE_URL}/${mediaType}/${movieId}/similar?api_key=${API_KEY}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          console.log(`Similar Movie Reponse: ${data.response}`);
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
  }, [mediaType, movieId]);
  if (loading) return <p>Loading similar movies...</p>;
  if (error) return <p>Error fetching similar movies: {error.message}</p>;
  return (
    <>
      <h2 className="text-yellow-500 text-2xl font-bold ml-16 mb-8 ">
        Similar {mediaType == "movie" ? "Movie" : "TV Shows"}
      </h2>
      <div className=" grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 lg:mx-14 mx-4">
        {similarMovies
          .filter((movie) => movie.poster_path)
          .map((movie, index) =>
            mediaType == "movie" ? (
              <MovieCard key={index} media={movie} />
            ) : (
              <TvShowCard key={index} media={movie} />
            )
          )}
      </div>
    </>
  );
};

export default SimilarMovieGroup;
