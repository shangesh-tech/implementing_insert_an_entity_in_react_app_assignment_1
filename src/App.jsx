// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import AddBook from './components/AddBook'; // Import the AddBook component
import './App.css'; // Import global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add-book" component={AddBook} /> {/* Route for AddBook */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
