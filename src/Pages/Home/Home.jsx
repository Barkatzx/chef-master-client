import React from "react";
import Banner from "./Banner";
import ChefInfo from "./ChefInfo";
import FeatureRecipe from "./FeatureRecipe";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <ChefInfo/>
      <FeatureRecipe />
      <Testimonials />
    </div>
  );
};

export default Home;
