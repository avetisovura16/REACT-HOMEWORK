import React, { useState, useEffect } from "react";
import { NavLink, useParams, Navigate } from "react-router-dom";


const Details = () => {


  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const url = `https://moviesdatabase.p.rapidapi.com/titles/${id}?info=base_info`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "7c3c5d129bmshd2d0e81953a59f8p14d11bjsna06cc550a224",
          "x-rapidapi-host": "moviesdatabase.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setMovie(data.results);

      } catch (error) {
        console.error("error:", error);
      }
    };

    fetchMovies();
  }, [id]);

  const user = JSON.parse(localStorage.getItem("user"));
if (!user) {
  return <Navigate to="/" replace />;
}


  if (!movie) {
    return <h2>Loading...</h2>;
  }




      


  return (
    <div>
        <NavLink className="links" to="/main">comeback</NavLink>



    <div>

      <div className="details-card">

        <img
          src={movie.primaryImage?.url}
          alt={movie.titleText?.text}
          width="250"
        />

        <div className="text">
          <h1>{movie.titleText?.text}</h1>
          <p>⭐ {movie.ratingsSummary?.aggregateRating}</p>
          <p>Year: {movie.releaseYear?.year}</p>
          <p>Genres: {movie.genres?.genres?.map((g) => g.text).join(", ")}</p>
          <p>{movie.plot?.plotText?.plainText || "no description :( "}</p>
          
        </div>
      </div>
    </div>
  




    </div>
  )
}

export default Details