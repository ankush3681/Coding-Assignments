import React from "react";
import "../styles/Home.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import RatingCircle from "./RatingCircle";

const Home = () => {
  const [data, setData] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getData = () => {
    axios.get("https://precious-cyan-barnacle.cyclic.app/hotel").then((res) => {
      // console.log(res.data);
      setData(res.data);
    });
  };

  const handleCLick = () => {
    alert("Hotel has been added to your wishlist!");
  };

  useEffect(() => {
    getData();

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>Competishun Hotels</h1>
      <div className="input">
        <input type="text" placeholder="Search for Hotels..." />
      </div>
      <div className="container">
        {data.map((ele) => (
          <div className="cards" key={ele.id}>
            <div className="imgDiv">
              <img src={ele[`image${currentImageIndex + 1}`]} alt={ele.name} />
            </div>
            <div className="detailDiv">
              <h3>
                <span>Name : </span>
                {ele.name}
              </h3>
              <p>
                <span>City : </span>
                {ele.city}
              </p>
              <p>
                <span>Star : </span>
                {ele.star}
              </p>
              <p className="bar">
                <span>Rating : </span>
                <RatingCircle rating={ele.rating} className="circular-bar" />
              </p>
              <button onClick={handleCLick}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
