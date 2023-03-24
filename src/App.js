import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css';
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/RowPost/Rowpost";
import {originals,actions,ComedyMovies,Horrormovies,RomanceMovies,Documentaries} from "./Components/Constants/Urls"
function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Rowpost url={originals} title="Netflix Originals" />
      <Rowpost url = {actions} title = "Actions" isSmall={true} />
      <Rowpost url = {ComedyMovies} title = "Comedy Movies" isSmall={true} />
      <Rowpost url = {Horrormovies} title = "Horror Movies" isSmall={true} />
      <Rowpost url = {RomanceMovies} title = "Romance Movies" isSmall={true} />
      <Rowpost url = {Documentaries} title = "Documentaries" isSmall={true} />
    </div>
  );
}

export default App;
