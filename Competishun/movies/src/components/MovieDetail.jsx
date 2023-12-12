import React from 'react';
import "../style/MovieDetail.css";

const MovieDetail = () => {

    const ImageUrl = "https://image.tmdb.org/t/p/w500";

    const data = JSON.parse(sessionStorage.getItem("movieDetail"));

    const handleButton = () =>{
      alert("Moving is Playing");
    }

    // console.log(data);
  return (
    <div>
      <h1 className='md-h1'>Movie Detail Page</h1>
      <div className="movie-card">
        <div className="movie-img">
            <img src={`${ImageUrl}${data.poster_path}`} alt={data.title} />
            </div>
            <div className="movie-detail">
            <h3><span>Title : </span>{data.title}</h3>
            <p><span>Description : </span>{data.overview}</p>
            <p><span>Popularity : </span>{data.popularity}</p>
            <p><span>Release date : </span>{data.release_date}</p>
            <p> <span>Vote Average : </span>{data.vote_average}</p>
            <p> <span>Vote Count : </span>{data.vote_count}</p>
            <button onClick={handleButton}>Play Now</button>
            </div>
            </div>
    </div>
  )
}

export default MovieDetail
