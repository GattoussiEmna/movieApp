import React from "react";
import ReactStars from "react-rating-stars-component";

const Search = ({ handleTitle, handleRate }) => {
  const ratingChanged = (newRating) => {
    handleRate(newRating);
  };

  const handleChange = (e) => {
    handleTitle(e.target.value);
  };

  return (
    <form className="search">
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
      />
      <input
        className="search"
        onChange={handleChange}
        type="text"
        placeholder="Put your film..."
        
      />
       <input onChange={handleChange} type="submit" value="SEARCH" /> 
    </form>
  );
};

export default Search;
