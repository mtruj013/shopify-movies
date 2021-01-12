import React, { useReducer, useEffect } from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import './App.scss';
import NavBar from './components/NavBar';
import SavedList from './components/SavedList';
import Container from './components/Container';
import Search from './components/Search';
import Movie from './components/Movie';
import { initialState, reducer } from './store/store';


const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
    .get(`https://www.omdbapi.com/?s=man&apikey=305cb4a6`)
    .then(res => {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: res.data.Search
      })
      console.log(res)
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
      .get(`http://www.omdbapi.com/?s=${searchVal}&apikey=305cb4a6`)
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
  console.log(movies)
  return (
    
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Switch>
        <Route path='/'>
          <Container />
        </Route>
        <Route path='/saved'>
          <SavedList />
        </Route>
      </Switch>
      <Search search={search} />

      <div className="movies">
        {loading && !error ? (
          <Loader/>
        ): error ? (
          <div className="error-msg">
            {error}
            </div>
        ):(
          
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
