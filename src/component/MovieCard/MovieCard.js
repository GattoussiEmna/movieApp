import React from "react";
import {Link} from "react-router-dom";



const MovieCard =({movie})=>{
    return(

        <div className="movie">
      <h2 className="title">{movie.title}</h2>
<div className="MyCard">
    <Link to={`/movie/${movie.id}`}>
<img
width={200}
 src={movie.posterUrl} />
    </Link>
</div>
<p>({movie.year})</p>
<h4>{"⭐".repeat(movie.rating)} </h4>
</div>
    );
};
export default MovieCard