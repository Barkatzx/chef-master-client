import React from "react";
import pasta from "/pasta_banner.jpg";
import { FaThumbsUp } from "react-icons/fa";

const ChefBanner = (props) => {
  const singleChefData = props?.value;
  const { bio, chefId, likes, name, numOfRecipes, picture, yearOfExp } =
    singleChefData;

  // console.log(singleChefData);

  return (
    <div
      style={{
        backgroundImage: `url(${pasta}), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,6))`,
        backgroundBlendMode: "overlay",
      }}
      className="bg-cover bg-center min-h-screen text-white rounded-xl mb-16"
    >
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-10 w-full container px-2 lg:px-4 mx-auto py-16 items-center">
        <LazyLoad className="mx-auto">
          <img
            src={picture}
            className="rounded-lg object-cover w-[350px] lg:w-[500px] h-[400px] lg:h-[650px]"
          />
        </LazyLoad>
        <div className="lg:w-1/2 ">
          <h2 className="text-pink-500 text-4xl lg:text-6xl leading-tight tracking-tighter font-bold">
            {name}
            <div className="badge bg-amber-500 ms-4">
              {" "}
              <div className="flex items-center p-2 w-full text-black">
                <FaThumbsUp className="mr-2"></FaThumbsUp>{" "}
                <span className="tracking-normal">{likes}</span>
              </div>{" "}
            </div>
          </h2>
          <p className="text-white py-7">
            {" "}
            <span className="text-amber-500 font-bold">Bio:</span> {bio}
          </p>
          <button
            type="button"
            className="border-2  border-amber-500  text-white px-6 py-1  leading-none flex items-center rounded-lg mb-8"
          >
            Years of Experience:{" "}
            <span className="p-1 rounded text-white font-semibold ml-2">
              {yearOfExp}
            </span>
            yrs
          </button>
          <button
            type="button"
            className="border-2  border-amber-500  text-white px-6 py-1 leading-none flex items-center rounded-lg"
          >
            Number Of Recipes:{" "}
            <span className="p-1 rounded text-white font-semibold ml-2">
              {numOfRecipes}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefBanner;
