import React, { useState } from "react";
import Cocktail from "./Cocktail";

const CocktailSearch = () => {
  const [drinkName, setDrinkName] = useState("");
  const [cocktailData, setCocktailData] = useState("");

  const handleInputChange = (e) => {
    setDrinkName(e.target.value);
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`
      );
      if (!response.ok) {
        throw new Error("Cocktail search failed");
      }
      const data = await response.json();
      console.log(data.drinks[0]);
      setCocktailData(data.drinks[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleButtonClick}>
        <label htmlFor="drinkName">Drink </label>
        <input
          type="text"
          id="drinkName"
          value={drinkName}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <Cocktail cocktailData={cocktailData} />
    </div>
  );
};

export default CocktailSearch;
