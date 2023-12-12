import React from 'react'
import { Link } from 'react-router-dom';
import "../style/Watchlist.css";

const Watchlist = () => {

  const imageUrl = "https://image.tmdb.org/t/p/w500";


  const watch = JSON.parse(sessionStorage.getItem("watch")) ||[];
  return (
    <div>
      <h1 className='h1'>Your Watchlist</h1>
      <div className="watch-container">
        {watch.length > 0 &&
          watch.map((ele) => (
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

export default Watchlist;
