import React, { useContext } from "react";
import ChefInfoCard from "./ChefInfoCard";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const ChefInfo = () => {
  const allChefInfos = useContext(AuthContext);
  const chefInfos = allChefInfos.chefInfo;
  const { id } = useParams();
  const singleChefData = useLoaderData();

  return (
    <div>
      <h2 className="font-bold text-center my-16 text-4xl lg:text-5xl">
        Our <span className="text-green-500">Best Chefs</span>
      </h2>

      <div className="grid px-2 lg:px-10 gap-8 container mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {chefInfos &&
          chefInfos.map((chefInfo) => (
            <ChefInfoCard key={chefInfo.chefId} value={chefInfo}></ChefInfoCard>
          ))}
      </div>
    </div>
  );
};

export default ChefInfo;
