import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ExerciseList from './Components/ExerciseList'
import EditExercise from './Components/EditExercise'
import CreateUser from './Components/CreateUser'
import Navbar from './Components/Navbar'
import CreateExercise from './Components/CreateExercise'

function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Route path="/" exact component={ExerciseList}/>
      <Route path="/edit/:id" component={EditExercise}/>
      <Route path="/create" component={CreateExercise}/>
      <Route path ="/user" component ={CreateUser}/>
    </Router>
  );
}

export default App;
