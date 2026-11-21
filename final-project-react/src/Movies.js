import { useState, useEffect } from "react";
import { useNavigate, Navigate  } from 'react-router-dom';

function Movies() {
  const [movies, setMovies] = useState([]);

  const [page, setPage] = useState(1);
  
    const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      const url = `https://moviesdatabase.p.rapidapi.com/titles?startYear=2000&titleType=movie&list=top_rated_english_250&sort=year.decr&page=${page}&info=base_info&limit=10`;
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

        setMovies(data.results);
      } catch (error) {
        console.error("error:", error);
      }
    };

    fetchMovies();
  }, [page]);

  const user = JSON.parse(localStorage.getItem("user"));


if (!user) {
  return <Navigate to="/" replace />;
}


  function comeback() {
  localStorage.removeItem("user");
  navigate("/login"); 
  }

  return (
    <div>
      <header>
        <h1>HomeCinema</h1>
<div id="UserData"> 
        <h1> {user?.name} </h1>
        <button id="buttonLogOut" onClick={comeback}>Log Out</button>
        </div>
      </header>

      <main>
        <ul className="movies-container">
          {movies.map((movie) => (
            <li onClick={() => {navigate(`/details/${movie.id}`);}}  key={movie.id}>

<img
  src={
    movie.primaryImage?.url ||
    "https://placehold.co/300x450?text=No+Image"
  }
  alt={movie.titleText?.text || "no i"}
  width="150"
  onError={(e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src =
      "https://placehold.co/300x450?text=No+Image";
  }}
/>

              <div className="text">
                <h1> {movie.titleText?.text} </h1>⭐
                {movie.ratingsSummary.aggregateRating}
                <p>{movie.plot?.plotText?.plainText || "no description :( "}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="pagination">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            prev
          </button>
          <button> {page} </button>
          <button onClick={() => setPage(page + 1)}>next</button>
        </div>

      </main>


    </div>
  );
}

export default Movies;
