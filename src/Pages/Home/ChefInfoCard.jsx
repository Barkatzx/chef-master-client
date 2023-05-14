import React from "react";
import { FaLongArrowAltRight, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChefInfoCard = ({ chef }) => {
  const { 
    bio, 
    chefId, 
    likes, 
    name, 
    numOfRecipes, 
    picture, 
    yearOfExp } =
    chef;
  return (
    <div className="card w-full bg-slate-200 shadow-2xl">
      <figure>
      <img
        className="w-full h-[400px] lg:h-[550px] object-cover rounded-3xl"
        src={picture}
      /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-success">
            {" "}
            <div className="flex items-center p-2 text-white">
              <FaThumbsUp className="mr-2 "></FaThumbsUp> {likes}
            </div>{" "}
          </div>
        </h2>
        <p className="my-3">{bio.slice(0, 125)}...</p>
        <div className="">
          <div className="space-y-3">
            <button
              type="button"
              className="border-2 border-pink-500  text-black px-6 py-1  leading-none flex items-center rounded-lg"
            >
              Years of Experience:{" "}
              <span className="p-1 rounded text-black font-semibold ml-2">
                {yearOfExp}
              </span>
              yrs
            </button>
            <button
              type="button"
              className="border-2 border-pink-600  text-black px-6 py-1 leading-none flex items-center rounded-lg"
            >
              Number Of Recipes:{" "}
              <span className="p-1 rounded text-black font-semibold ml-2">
                {numOfRecipes}
              </span>
            </button>
          </div>
          <Link to={`/recipes/${chefId}`} state={chef}>
            <button className="bg-pink-500 text-white px-6 py-2 mt-8 rounded-md">
              View Recipes{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefInfoCard;
