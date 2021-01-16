import React from 'react';
import '../styles/MovieCard.scss';
import '../styles/SavedList.scss';
import NominateButton from './NominateButton';

const SavedList = (props) => {
    const movie = props.movie;
    const removeNominee = props.removeNominee;
    return (
        <div className="saved-container">
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
                <div className="delete" onClick={() => removeNominee(movie)}> <NominateButton text="Remove"/></div>
            </div>
        </div>
    )
}

export default SavedList;