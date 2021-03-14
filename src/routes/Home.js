import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie/Movie';
import './Home.css';


class Home extends React.Component {

  state =  {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    this.setState({movies: movies, isLoading: false})
  }

  componentDidMount() {
    console.log('rendered')
    this.getMovies()
  }

  componentDidUpdate() {
    console.log('updated'); 
  }

  render() {
    console.log('rendering');
    console.log(this.state.movies)
    const {isLoading, movies} = this.state
    return (
    <section className="container">
        {
          isLoading ? <div className="loader"><span className="loader-label">Loading...</span></div> : 
          <div className="movies">
          {movies.map(movie => 
              <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
              year={movie.year}/>)
          }
          </div>
        }
    </section>
    )
  }
}

export default Home;
