import { useState } from "react"
import './index.css';

function App() {
  const ingredients = [
    "Farine",
    "Sucre",
    "Beurre",
    "Lait",
    "Oeufs",
    "Sel",
    "Levure"
  ];

  const [searchValue, setSearchValue] = useState("")

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }
  
  const filteredIngredients = ingredients.filter((ing) =>
    ing.toLowerCase().includes(searchValue.toLowerCase())
  )

  return <>
    <h3>Search ingredients on the fridge...</h3>
    <div id="ingredients">
      <ul>
        {filteredIngredients.map((ing, index) =>
          <li key={index}>{ing}</li>
        )}
      </ul>
    </div>
    <input type="text" name="searchValue" onChange={handleChange} placeholder="Enter text..."/>
  </>

}

export default App