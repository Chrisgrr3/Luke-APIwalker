import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Router, navigate } from "@reach/router";
import axios from 'axios';
import IdComponent from './components/IdComponent';
import CategoryComponent from './components/CategoryComponent';
import FilmComponent from './components/FilmComponent';
import PeopleComponent from './components/PeopleComponent';
import PlanetComponent from './components/PlanetComponent';
import SpeciesComponent from './components/SpeciesComponent';
import StarshipComponent from './components/StarshipComponent';
import VehicleComponent from './components/VehicleComponent';

function App() {
  const [ category, setCategory] = useState({
    category: "people",
    id: "",
    submitted: false
  })

  let labelStyle = {
    marginRight: "20px",
    position: "relative",
    top: "70px",
    right: "230px",
  }

  let selectStyle = {
    padding: "15px",
    border: "1px solid white",
    borderRadius: "5px",
    fontSize: "25px",
    position: "relative",
    right:"50px",
    backgroundColor: "#efefef"
  }

  const submitHandler = e => {
    e.preventDefault();
    setCategory({
      ...category,
      [e.target.name]: e.target.value
    })
    category.submitted = true;
    navigate(`/${category.category}/${category.id}`);
  }

  const changeHandler = e => {
    setCategory({
      ...category,
      [e.target.name]: e.target.value
    })
  }

  const buttonStyle = {
    position: "relative",
    bottom: "210px",
    left: "320px",
    padding: "15px",
    border: "1px solid white",
    borderRadius: "5px",
    fontSize: "25px",
    backgroundColor: "#0019f8",
    color: "white",
  }
  return (
    <div className="App">
      <form onSubmit={ submitHandler }>
        <CategoryComponent labelStyle={ labelStyle } changeHandler={ changeHandler } selectStyle={ selectStyle } />
        <IdComponent changeHandler={ changeHandler }/>
        <button name="submitted" style = { buttonStyle } type="submit">Search</button>
      </form>
      <Router>
        <FilmComponent path="/film/:id" />
        <PeopleComponent path="/people/:id"/>
        <PlanetComponent path="/planet/:id"/>
        <SpeciesComponent path="/species/:id"/>
        <StarshipComponent path="/starship/:id"/>
        <VehicleComponent path="/vehicle/:id"/>
      </Router>
    </div>
  );
}

export default App;
