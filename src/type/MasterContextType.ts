/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */

export type MasterDataContext = {
  movies: any[];

  page: number;

  searchResult: any[];

  sliderData: any[];

  similarMovies: any[];

  detailsType: "movie" | "tv";

  movieOrTV: "movie" | "tv";

  singleMovie: {};

  movieId: string;

  setQuery: (query: string | ((prev: string) => string)) => void;

  setMovieId: (movieId: string | ((prev: string) => string)) => void;

  setDetailsType: (
    detailsType: "movie" | "tv" | ((prev: "movie" | "tv") => "movie" | "tv")
  ) => void;

  setSingleMovie: (singleMovie: {} | ((prev: {}) => {})) => void;
  loading: boolean;
  error: Error | null;

  setTrendingOption: (
    trendingOption: string | ((prev: string) => string)
  ) => void;

  setMovieOrTV: (
    movieOrTv: "movie" | "tv" | ((prev: "movie" | "tv") => "movie" | "tv")
  ) => void;

  setPage: (page: number | ((prev: number) => number)) => void;
};
