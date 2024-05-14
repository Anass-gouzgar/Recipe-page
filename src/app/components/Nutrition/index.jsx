import React from 'react'

const index = () => {
  return (
    <div className="w-full -mt-10 p-8">
      <h1 className="text-3xl text-Nutmeg font-youngSerif "> Nutrition</h1>
      <p className="mt-3 font-outfit text-gray-600">
        {" "}
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div className="container">
        <div className="ml-2 mt-4 mb-3 flex">
          <div className="text-gray-600 font-bold w-1/2">Calories</div>
          <div className="text-Nutmeg font-outfit inlinen w-1/2 font-bold ">
            277kcal
          </div>
        </div>
        <hr />
        <div className="ml-2 mt-3 mb-3 flex">
          <div className="text-gray-600 font-bold w-1/2">Carbs</div>
          <div className="text-Nutmeg font-outfit inlinen w-1/2 font-bold">
            0g
          </div>
        </div>
        <hr />
        <div className="ml-2 mt-3 mb-3 flex">
          <div className="text-gray-600 font-bold w-1/2">Protein</div>
          <div className="text-Nutmeg font-outfit inlinen w-1/2 font-bold">
            20g
          </div>
        </div>
        <hr />
        <div className="ml-2 mt-3 mb-3 flex">
          <div className="text-gray-600 font-bold w-1/2">Fat</div>
          <div className="text-Nutmeg font-outfit inlinen w-1/2 font-bold">
            22g
          </div>
        </div>
      </div>
    </div>
  );
}

export default index