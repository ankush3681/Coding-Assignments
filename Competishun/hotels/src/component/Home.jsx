import React from "react";
import "../styles/Home.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import RatingCircle from "./RatingCircle";
import { FaStar } from "react-icons/fa";

const Home = () => {
  const [data, setData] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);



  const getData = () => {
    axios.get("https://precious-cyan-barnacle.cyclic.app/hotel").then((res) => {
      // console.log(res.data);
      setData(res.data);
    });
  };

  const filteredData = data.filter((hotel) =>
  hotel.name.toLowerCase().includes(searchQuery.toLowerCase())
);


const handleImageClick = (index,e) => {
  if (e.target.tagName.toLowerCase() !== 'button') {
    setSelectedCard((prevIndex) => (prevIndex === index ? null : index));
  }
};


  const handleCLick = () => {
    alert("Your booking has been confirmed");
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
        <input 
         type="text"
         placeholder="Search for Hotels..."
         value={searchQuery}
         onChange={(e) => setSearchQuery(e.target.value)}/>
      </div>
      <div className="container">
        {filteredData.map((ele,index) => (
          <div className="cards" key={ele.id} onClick={(e)=>handleImageClick(index,e)}>
            <div className="imgDiv">
              <img src={ele[`image${currentImageIndex + 1}`]} alt={ele.name}  />
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
                {ele.star} <FaStar color="blueviolet"/>
              </p>
              <p className="bar">
                <span>Rating : </span>
                <RatingCircle rating={ele.rating} className="circular-bar" />
              </p>
              {selectedCard === index && (
                <p>
                  <span>Reviews: </span>
                  {ele.review.map((review, i) => (
                    <span key={i}>{review}, </span>
                  ))}
                </p>
              )}
              <button onClick={handleCLick}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
