import React, { useEffect, useState } from "react";
import "../style/Home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa"
import { BsFillStopwatchFill } from "react-icons/bs"

const Home = () => {
  const [data, setData] = useState("");

  const getData = () => {
    axios("http://localhost:3001/movie").then((res) => {
      setData(res.data);
      // console.log(res.data);
    });
  };


  const handleFav =(id)=>{
       alert("Movie Added to Favourite.")
       localStorage.setItem("fav",id)
  } 


  const handleWatchlist =()=>{
       alert("Movie Added to Watchlist.")
  } 

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
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
            <Link><img src={ele.image} alt={ele.image} /></Link>
            <h3>{ele.name}</h3>
            <p>{ele.category}</p>
            <div className="icon-section"><BsFillStopwatchFill size={25} onClick={handleWatchlist}/> <FaRegHeart size={25} onClick={()=>handleFav(ele.id)}/></div>
          </div>
          ))}
      </div>
    </>
  );
};

export default Home;
