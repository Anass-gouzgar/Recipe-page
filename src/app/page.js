// "use client";
// import Image from "next/image";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./components/hero"),{loading:() => <p></p>}),
Ingredients = dynamic(() => import("./components/ingredients"),{loading:() => <p></p>}),
Instructions = dynamic(() => import("./components/instructions"),{loading:() => <p></p>}),
Nutrition = dynamic(() => import("./components/Nutrition"),{loading:() => <p></p>});

export default function Home() {
  return (
    <main className="bg-bgColor md:p-32 mb-16">
      <div className="max-w-[800px] rounded-2xl flex flex-col items-center mx-auto md:p-4 bg-white" >
        <Hero />
        <Ingredients />
        <Instructions />     
        <Nutrition />
      </div>
    </main>
  );
}
