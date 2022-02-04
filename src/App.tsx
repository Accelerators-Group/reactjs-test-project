import React from 'react';
import SearchBar from './components/SearchBar';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Bookmark from './components/Bookmark';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <div>
          
          <Switch>
            <Route exact path='/' component={SearchBar} />
            <Route path='/bookmark' component={Bookmark} />
          </Switch>
        </div>
      </Router>
     

    </div>
  );
}

export default App;
