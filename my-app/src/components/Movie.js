import React, {useState} from 'react';
import '../styles/MovieCard.scss';

const Movie = (props) => {
    const movie = props.movie;
 
    const NominateButton = props.nominateButton;

    return (
        <div className="movie-wrapper">
            <div className="movie-card">
                <h2>{movie.Title}</h2>
                <div className="movie-poster">
                    <img 
                        width="200"
                        alt={`Movie title: ${movie.Title}`}
                        src={movie.Poster}
                    />
                </div>
                <p className="movie-year">
                    Year: {movie.Year}
                </p>

            </div>
            <div onClick={() => props.addNominee(movie)}>
                <NominateButton text="Nominate"/>
            </div>
        </div>
    )
}

export default Movie;