import React,{useState, useEffect} from 'react';
import MovieData from '../MovieData/Data';
import { useNavigate, useParams } from 'react-router-dom';

const MovieDetails = () => {
    const [movie , setMovie]=useState({})
    const params =useParams()
    const Navigate=useNavigate();
    useEffect(()=>{
        setMovie(MovieData.find(movie=>movie.id === params.id))
    },[params.id])


  return (
    <div>
      <button className="btnn" onClick={() => Navigate("/")}>
        Back To Home{" "}
      </button> 

      <h1 className="movieDetails"> Movie details </h1>
      <h1 className="movieTitle">~~ {movie.title} ~~</h1>

      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

     
    </div>
  );
  };

export default MovieDetails