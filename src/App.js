import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { RecipeContext } from './Context/RecipeContext';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  useEffect(() => {
    //axios.get('https://dummyjson.com/recipes')
    axios.get('http://localhost:3000/pokemons/pokemonlist')
      .then(result => {
        console.log(result.data);
        setRecipes(result.data.recipes);
      })
      .catch(error => console.log("error"));
  }, []);

  return (
    <>
      <RecipeContext.Provider value={{recipes,filteredItems,setFilteredItems}}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </RecipeContext.Provider>
    </>
  );
}

export default App;
