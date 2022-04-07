import React from "react";


const Header = (props) => {
  const ratingChanged = (newRating) => {
  console.log(newRating);
  };
  return (
    <header className="App-header">
      <h2>{props.text}</h2>
      
    </header>
  );
};

export default Header;