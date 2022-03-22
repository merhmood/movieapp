import { useEffect } from "react";
import useFetch from "./useFetch";
import MovieItem from "./MovieItem";
import "./App.css";

const App = () => {
  let { error, dataLoading, data } = useFetch(
    "https://www.omdbapi.com/?i=tt3896198&apikey=740a39d"
  );

  useEffect(() => {
    console.log(data, error, dataLoading);
  });
  return (
    <div>
      <header>
        <div className="logo">My TestApp</div>
      </header>
      <section>
        <img
          src={`${process.env.PUBLIC_URL}harmburger-image.jpg`}
          alt="hamburger"
        />
        <p>Watch something incredible.</p>
      </section>
      <section>
        <div className="search-form">
          <label htmlFor="search">Search</label>
          <input type="text" />
        </div>

        <div className="category-one">
          <h3>Action Movie</h3>
          {error ? (
            <p>failed to retreive movies</p>
          ) : dataLoading ? (
            <p>waiting for data</p>
          ) : (
            <div className="movie-items">
              <div className="movie-items-wrapper">
                {data.map((data) => {
                  const { Title } = data;
                  return <MovieItem title={Title} />;
                })}
              </div>
            </div>
          )}
        </div>
        <div className="category-two">
          <h3>Love Movie</h3>
          {error ? (
            <p>failed to retreive movies</p>
          ) : dataLoading ? (
            <p>waiting for data</p>
          ) : (
            <div className="movie-items">
              <div className="movie-items-wrapper">
                {data.map((data) => {
                  const { Title } = data;
                  return <MovieItem title={Title} />;
                })}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default App;
