import React from "react";

const Cocktail = ({ cocktailData }) => {
  if (!cocktailData) {
    return null;
  }

  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredientKey = `strIngredient${i}`;
    const measurementKey = `strMeasure${i}`;

    const ingredient = cocktailData[ingredientKey];
    const measurement = cocktailData[measurementKey];

    if (ingredient) {
      ingredients.push(`${measurement} ${ingredient}`);
    }
  }

  return (
    <div>
      <h2>{cocktailData.strDrink}</h2>
      <img src={cocktailData.strDrinkThumb} alt="Cocktail" />
      <p>Ingredients:</p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>{cocktailData.strInstructions}</p>
    </div>
  );
};

export default Cocktail;
