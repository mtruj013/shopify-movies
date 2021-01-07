import { BrowserRouter as Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import SavedList from './components/SavedList';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <Switch>
        <Route path = '/'>
          <Container/>
        </Route>
        <Route path ='/saved'>
          <SavedList/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
