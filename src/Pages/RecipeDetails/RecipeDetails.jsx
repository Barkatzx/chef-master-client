import React, { useContext, useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import RecipeDetailsCard from "./RecipeDetailsCard";
import ChefBanner from "./ChefBanner";
import { AuthContext } from "../../Providers/AuthProviders";

const RecipeDetails = () => {
  // const singleChefdata = useLocation().state;
  const { recipeData } = useContext(AuthContext);
  // const chefName = singleChefdata?.name;

  const { id } = useParams();
  const singleChefData = useLoaderData();
  const name = singleChefData.name;

  return (
    <div className="container mx-auto my-12">
      <div>
        <ChefBanner value={singleChefData}></ChefBanner>
      </div>
      <h2 className="text-center text-3xl lg:text-4xl px-1 lg:px-0 font-bold my-8">
        3 best dishes of <span className="text-pink-500">{name}</span>
      </h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 px-2 lg:px-0 gap-8">
        {recipeData.slice(0, 3).map((recipe) => (
          <RecipeDetailsCard
            key={recipe.recipeName}
            value={recipe}
          ></RecipeDetailsCard>
        ))}
      </div>
    </div>
  );
};

export default RecipeDetails;