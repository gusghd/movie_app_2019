import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title, summary, poster, year, id, genres}) {
  return (
    <div className="movie">
        <Link to={{
            pathname: `/movie/${id}`,
            state: {
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>
    
        <img src={poster} alt={title} title={title}/>
        <div className="movie_data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">{genres.map((genre, index) => <li className="genres__genre" key={index}>{genre}</li>)}</ul>
            <p className="movie__summary">{summary.slice(0, 200)}...</p>
    
        </div>
        </Link>
    </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie