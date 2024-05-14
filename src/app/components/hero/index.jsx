import React from "react";
import Image from "next/image";
import omelette from "/public/assets/images/image-omelette.jpeg";

const data = [
  { a: "Total", b: "Approximately 10 minutes" },
  { a: "Preparation", b: "5 minutes" },
  { a: "Cooking", b: "5 minutes" },
];

const index = () => {
  return (
    <div>
      <Image src={omelette} alt="omelette" className="w-full md:rounded-xl h-72 " />
      <div className="p-8 flex flex-col gap-6">
        <h1 className="text-3xl font-youngSerif font-medium">
          {" "}
          Simple Omelette Recipe
        </h1>
        <p className=" w-full font-outfit text-base md:text-3xl">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <div className="bg-pColor rounded-xl px-9 py-6 flex flex-col">
          <h1 className="text-xl text-fuchsia-950 mb-3 font-medium font-youngSerif">
            Preparation time
          </h1>
          {data.map((item, index) => (
            <ul key={index} className="list-disc px-7 font-outfit">
              <li className="mb-1 ">
                <span className="font-bold ml-2">{item.a}</span> : {item.b}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
