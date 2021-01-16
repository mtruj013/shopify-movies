import React, { useReducer, useEffect, useState } from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.scss';
import NavBar from './components/NavBar';
import SavedList from './components/SavedList';
import Container from './components/Container';
import { initialState, reducer } from './store/store';


const App = () => {


  // searching for movies/ displaying search load/error
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=man&type=movie&apikey=305cb4a6`)
      .then(res => {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: res.data.Search
        })
      })
      .catch(err => {
        console.log("error!!")
      })
  }, []);

  const search = searchVal => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    axios
      .get(`https://www.omdbapi.com/?s=${searchVal}&type=movie&apikey=305cb4a6`)
      .then(res => {
        if (res.data.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: res.data.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: res.data.Error
          });
        };
      });
  };

  const { movies, error, loading } = state;


  // adding a nominee
  const [nominees, setNominees] = useState([])

  const addNominee = (nominee) => {
    const newNominee = [...nominees, nominee]
    if (nominees.length < 5) {
      setNominees(newNominee)
    }
  }

  // deleting a nominee
  const removeNominee = (movie) => {
    const newNomineeList = nominees.filter(
      (nominee) => nominee.imdbID !== movie.imdbID 
    )
    setNominees(newNomineeList)
  }


  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Switch>
        <Route exact path='/'>
          <Container search={search} movies={movies} error={error} loading={loading} nominees={nominees} addNominee={addNominee} />

        </Route>
        <Route path='/saved'>
        <div className="saved">
          {nominees.length < 1 ? (
            <h1>No nominees yet! Click 'Nominate' to add them!</h1>
          ) : (
                nominees.map((nominee, index) => (
                  <SavedList key={`${index}-${nominee.Title}`} movie={nominee} removeNominee={removeNominee}/>
                ))
              )}
              </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
