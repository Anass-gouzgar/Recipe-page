import React from 'react'

const steps = [
  {
    title: "Beat the eggs",
    description:
      "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
  },
  {
    title: "Heat the pan",
    description:
      "Place a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    title: "Cook the omelette",
    description:
      "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
  },
  {
    title: "Add fillings (optional)",
    description:
      "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
  },
  {
    title: "Fold and serve",
    description:
      "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  },
  {
    title: "Enjoy",
    description: "Serve hot, with additional salt and pepper if needed.",
  },
];

const index = () => {
  return (
    <main className='p-8'>
        <h1 className="text-3xl font-youngSerif text-Nutmeg">
          {" "}
          Instructions
        </h1>         
         <ul  className="mt-5 list-decimal px-2">

        {steps.map((step, index) => (
            <li key={index} className=" font-outfit mb-3 text-sm text-gray-500  "><span className='font-medium text-black'>{step.title}{": "}</span>{step.description}</li>
          
        ))}</ul>
    </main>
  );
}

export default index