import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ChefInfoCard from "./ChefInfoCard"

const ChefInfo = () => {
  const { chefs } = useLoaderData()

  return (
    <div>
      <h2 className="font-bold text-center my-16 text-4xl lg:text-5xl">
        Our <span className="text-pink-500">Best Chefs</span>
      </h2>

      <div className="grid px-2 lg:px-10 gap-8 container mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {chefs.map((chef) => (
          <ChefInfoCard key= {chef.chefId} chef= {chef}>
          </ChefInfoCard>
        ))}
      </div>
    </div>
  );
};

export default ChefInfo;