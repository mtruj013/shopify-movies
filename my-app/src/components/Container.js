import React from 'react';
import Movie from '../components/Movie';
import Search from '../components/Search';
import Loader from 'react-loader-spinner';
import NominateButton from '../components/NominateButton';
import LimitBanner from './LimitBanner';



const Container = (props) => {
    // props passed need to be movie, addNominee, nominateBuytton(maybe)
    const search = props.search;
    const movies = props.movies;
    const error = props.error;
    const loading = props.loading;
    const addNominee = props.addNominee;
    const nominees = props.nominees;
    const findDuplicate = props.findDuplicate;
    

    return (
        <div className="container">
            {nominees.length === 5 ? (
                <div className="limit-reached">
                    <LimitBanner text="You have reached your nomination limit"/>
                </div>
            ): <h2 className="title">Find your favorite movies using the search bar and nominate up to 5 of them for a chance to win a Shoppie award!</h2>}
            
            
            <h3 className="title2">
                See and edit your nominations by clicking <span>Nominated Movies</span> above</h3>
            <div className="search">
                <Search search={search} />
            </div>

            <div className="movies">
                {loading && !error ? (
                    <Loader />
                ) : error ? (
                    <div className="error-msg">
                        {error}
                    </div>
                ) : (
                    movies.map((movie, index) => (
                        <Movie key={`${index}-${movie.Title}`} movie={movie} addNominee={addNominee} findDuplicate={findDuplicate} nominateButton={NominateButton} />
                    ))
                )}
            </div>
        </div>
    )
}

export default Container;