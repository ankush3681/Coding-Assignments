import React from "react";
import "../style/Calorie.css";
import { useState } from "react";
import { useEffect } from "react";
import RatingCircle from "./RatingCircle";
import { FadeLoader } from "react-spinners";
import axios from "axios";
import Navbar from "./Navbar";

const Home = () => {
  const [data, setData] = useState([]);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [loading, setLoading] = useState(false);
  const [submit,setSubmit] = useState(false);

  const getData = () => {
    setLoading(true);

    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=793d7a17&app_key=d10f184dffb9682c340f8073166551e8&calories=${min}-${max}`
      )
      .then((res) => {
        // console.log(res.data.hits)
        setData(res.data.hits);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSearch = () =>{
    if(min<1){
        alert("Minimum value cannot be less than 1!");
    }else{
      setSubmit(!submit);
    }
}

  const handleCLick = () => {
    alert("Order Placed");
  };

  useEffect(() => {
    getData();
  }, [submit]);

  return (
    <>
      <Navbar />
      <div className="main-div">
        <h1>Foods by Calorie</h1>

        <div className="calorie-input">
          <p>
            <input type="number" placeholder="Minimum" min="1" max="1000" onChange={(e)=>setMin(e.target.value)}/>
            <input type="number" placeholder="Maximum" min="10" max="2000" onChange={(e)=>setMax(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
          </p>
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

export default Home;
