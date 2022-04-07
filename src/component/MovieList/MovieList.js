import React from "react";
import MovieCard from "../MovieCard/MovieCard";



const MovieList = ({ Data, title, rate }) => {
  return (
    <div className="MyList" >
      {Data.filter(
        (movie) =>
          movie.title.toLowerCase().includes(title.toLowerCase()) && movie.rating >= rate
      ).map((movie, index) => (
        <MovieCard movie={movie} key={index} />
      ))}
    </div>
  );
};
export default MovieList 
