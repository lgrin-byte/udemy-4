import { useState, useEffect } from 'react';
import Movie from '../components/Movie';
import axios from 'axios';

function Home() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const { data: { data: { movies: movies } } } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    setMovies(movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {
        movies &&
        movies.map((movie) => {
          return <Movie
            key={movie.key}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            genres={movie.genres}
          />
        })
      }
    </div>
  );
}

export default Home;