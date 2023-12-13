import React from "react";
import "../style/Home.css";
import { useState } from "react";
import { useEffect } from "react";
import RatingCircle from "./RatingCircle";
import { FadeLoader } from "react-spinners";
import axios from "axios";
import Navbar from "./Navbar";

const Home = () => {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("Indian");
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");


  const getData = () => {
    setLoading(true);

    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=793d7a17&app_key=d10f184dffb9682c340f8073166551e8&cuisineType=${country}`
      )
      .then((res) => {
        // console.log(res.data.hits)
        setData(res.data.hits);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredData = data.filter((ele) =>
  ele.recipe.label.toLowerCase().includes(searchInput.toLowerCase())
);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setCountry(e.target.value);
  };

  const handleCLick = () => {
    alert("Order Placed");
  };

  useEffect(() => {
    getData();
  }, [country]);

  return (
    <>
      <Navbar />
      <div className="main-div">
        <h1>Competishun Foods</h1>
        <div className="select-input">
          <select onChange={(e) => handleChange(e)}>
            <option value="Indian">Indian</option>
            <option value="French">French</option>
            <option value="Chinese">Chinese</option>
            <option value="British">British</option>
            <option value="American">American</option>
            <option value="Italian">Italian</option>
          </select>
          <input 
          type="text" 
          placeholder="Search for Foods..." 
          onChange={(e)=>handleSearchChange(e)}
          />
        </div>

        <div className="container">
          {loading ? (
            <div className="loader">
              <FadeLoader color="blueviolet" loading={loading} />
            </div>
          ) : (
            filteredData.map((ele, index) => (
              <div className="cards" key={index}>
                <div className="imgDiv">
                  <img src={ele.recipe.image} alt={ele.recipe.label} />
                </div>
                <div className="detailDiv">
                  <h3>{ele.recipe.label}</h3>
                  <p>
                    <span>Protein Count : </span>
                    {ele.recipe.totalNutrients.PROCNT.quantity.toFixed(2)} g
                  </p>
                  <div className="bar">
                    <span>Fat% : </span>
                    <RatingCircle
                      rating={ele.recipe.totalNutrients.FAT.quantity.toFixed(2)}
                      className="circular-bar"
                    />
                  </div>
                  <button onClick={handleCLick}>Order Now</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
