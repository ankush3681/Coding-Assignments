import React from "react";
import "../style/Diet.css";
import { useState } from "react";
import { useEffect } from "react";
import RatingCircle from "./RatingCircle";
import { FadeLoader } from "react-spinners";
import axios from "axios";
import Navbar from "./Navbar";

const Diet = () => {
  const [data, setData] = useState([]);
  const [diet, setDiet] = useState("balanced");
  const [loading, setLoading] = useState(false);


  const getData = () => {
    setLoading(true);

    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=793d7a17&app_key=d10f184dffb9682c340f8073166551e8&diet=${diet}`
      )
      .then((res) => {
        // console.log(res.data.hits)
        setData(res.data.hits);
      })
      .finally(() => {
        setLoading(false);
      });
  };



  const handleChange = (e) => {
    // console.log(e.target.value);
    setDiet(e.target.value);
  };

  const handleCLick = () => {
    alert("Order Placed");
  };

  useEffect(() => {
    getData();
  }, [diet]);

  return (
    <>
      <Navbar />
      <div className="main-div">
        <h1>Diet Plans</h1>
        <div>
          <select onChange={(e) => handleChange(e)}  className="diet-select-input">
            <option value="balanced">Balanced</option>
            <option value="high-fiber">High-Fiber</option>
            <option value="high-protein">High-Protein</option>
            <option value="low-carb">Low-Carb</option>
            <option value="low-fat">Low-Fat</option>
            <option value="low-sodium">Low-Sodium</option>
          </select>
        </div>

        <div className="container">
          {loading ? (
            <div className="loader">
              <FadeLoader color="blueviolet" loading={loading} />
            </div>
          ) : (
            data.map((ele, index) => (
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

export default Diet;
