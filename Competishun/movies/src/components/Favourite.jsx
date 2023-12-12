import React from 'react'
import { Link } from 'react-router-dom';
import "../style/Favourite.css";

const Favourite = () => {

  const imageUrl = "https://image.tmdb.org/t/p/w500";


  const favorite = JSON.parse(sessionStorage.getItem("fav")) ||[];
  return (
    <div>
      <h1 className='h1'>Your Favourite Movies</h1>
      <div className="fav-container">
        {favorite.length > 0 &&
          favorite.map((ele) => (
          <div className="card" key={ele.id}>
            <Link><img src={`${imageUrl}${ele.poster_path}`} alt={ele.image} /></Link>
            <h3>{ele.title}</h3>
            <p>{ele.category}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Favourite;
