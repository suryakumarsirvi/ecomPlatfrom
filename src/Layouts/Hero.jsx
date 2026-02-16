import React from "react";
import Card from "../Components/Card";
import GridProducts from "../Components/GridProducts";

const Hero = () => {
  return (
    <div className=" h-full w-full">
      <div className="h-3/4 w-full flex items-center bg-[#D4D4D4] rounded-md justify-between">
        <div className="h-full flex flex-col p-24 gap-4">
          <h1 className="text-7xl font-semibold">
            WoodMart<br />Minimalist 2026
          </h1>
          <p className="text-zinc-700">
            Open-source neutral-style system symbols elaborately crafted<br />
            {" "}
            for designers and developers. All of the icons are free for both
            personal and commercial use.
          </p>
          <button className="px-4 py-2 font-semibold cursor-pointer active:scale-95 bg-black text-white w-fit text-sm">
            SHOP NOW
          </button>
        </div>
        <img
          className="h-full w-1/2 object-contain"
          src="https://i.pinimg.com/736x/22/b2/78/22b2784791ab273f00ef50856b6507eb.jpg"
          alt="Hero Image"
        />
      </div>
      <h1 className="my-6 text-lg font-semibold">FEATURED PRODUCTS</h1>
      <div>
        <GridProducts />
        <h1 className="my-6 text-lg font-semibold">POPULAR</h1>

        <div className="grid grid-cols-5 gap-2">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Hero;
