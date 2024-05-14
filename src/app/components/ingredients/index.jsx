import React from "react";

const Ingredients = [
  "2-3 large eggs",
  "Salt, to taste",
  "Pepper, to taste",
  "1 tablespoon of butter or oil",
  "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
];

const Index = () => {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-youngSerif text-Nutmeg">Ingredients</h1>
      <ul className="custom-list p-8  ">
        {Ingredients.map((item, index) => (
          <li key={index} className="mb-3 text-gray-700 ">
            {item}
          </li>
        ))}
      </ul>
      <hr />
    </section>
  );
};

export default Index;
