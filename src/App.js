import React,{ useState } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Search from "./component/Search/Search";
import MovieData from "./component/MovieData/Data";
import MovieList from "./component/MovieList/MovieList";
import AddMovie from "./component/AddMovie/AddMovie";
import MovieDetails from "./component/MovieDetails/MovieDetails";
import { Route, Routes } from "react-router-dom";


function App(){
  const [title , setTitle] = useState("");
  const [rate, setRate] = useState(0);
  const [Data, setData]=useState(MovieData)

  const handleTitle=(input)=>{
    setTitle(input)
  }
  const handleRate=(input)=>{
    setRate (input)
  }
  const handleData=(input)=>{
    setData([...Data,input])
  }

  return (
    <div className="App">
      <Header text="HOOKED" />
      <Search handleTitle={handleTitle} handleRate={handleRate} />
      <p className="App-intro">Sharing a few of our favourite movies</p>

      <AddMovie handleData={handleData} />
      <Routes>
        <Route
          path="/" element={<MovieList Data={Data} title={title} rate={rate} />}
          />
          <Route
          path="/movie/:id" element={<MovieDetails/>}
          />
        
      </Routes>
    </div>
  );

}

export default App

