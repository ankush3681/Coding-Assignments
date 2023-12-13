import React, { useEffect, useState } from "react";
import "../style/Home.css";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa"
import { BsFillStopwatchFill } from "react-icons/bs"
import Navbar from "./Navbar";

const Home = () => {
  const [data, setData] = useState("");
  const imageUrl = "https://image.tmdb.org/t/p/w500";

 


// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

const getData = ()=>{
  // const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTk2N2I5YjEzODBiNGI3OGRiZjMxZjQzZjIwZDc5YSIsInN1YiI6IjY1NzcxNzhlNTY0ZWM3MDBlMTBjN2E0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z0pvJDTsAWuBcZZaPoWI2I1D5neXD5fq3g92eIn_rSM'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => {
    setData(json.results);
    console.log(json.results)
  })
  .catch(err => console.error('error:' + err));

  }


  let favData =  JSON.parse(sessionStorage.getItem("fav")) || [];
  let WatchData =  JSON.parse(sessionStorage.getItem("watch")) || [];


  const handleFav =(ele)=>{
    // console.log(ele);
       alert("Movie Added to Favourite.")
       favData.push(ele);
       sessionStorage.setItem("fav",JSON.stringify(favData));
  } 


  const handleWatchlist =(ele)=>{
       alert("Movie Added to Watchlist.");
       WatchData.push(ele);
       sessionStorage.setItem("watch",JSON.stringify(WatchData));
  } 

  const handleImage = (mov) =>{
    sessionStorage.setItem("movieDetail",JSON.stringify(mov))
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <Navbar/>
      <div className="movie-top">
        <h1>Movies</h1>
        <input
          type="text"
          id="movie-searchbar"
          placeholder="Search Movie Here..."
        />
      </div>

      <div className="container">
        {data.length > 0 &&
          data.map((ele) => (
          <div className="card" key={ele.id}>
            <div className="topIcon">
            <BsFillStopwatchFill size={25} onClick={()=>handleWatchlist(ele)}/> <FaRegHeart size={25} onClick={()=>handleFav(ele)}/>
            </div>
            <Link to={`/home/${ele.id}`} onClick={()=>handleImage(ele)}><img src={`${imageUrl}${ele.poster_path}`} /></Link>
            <h3>{ele.title}</h3>
            <p>{ele.release_date}</p>
          </div>
          ))}
      </div>
    </>
  );
};

export default Home;
