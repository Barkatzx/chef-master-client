import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => toast("Added to Your Favourite List");

const RecipeDetailsCard = (props) => {
  const { cookingMethod, photoUrl, ingredients, rating, recipeName } =
    props.value;

  const [disabled, setDisabled] = useState(false);
  const handleDisabled = () => {
    setDisabled(!disabled);
  };

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img className="h-[270px] w-full object-cover" src={photoUrl} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipeName}</h2>
        <p className="font-semibold">
          Ingredients:{" "}
          <span className="font-normal text-sm">
            {ingredients.toString().split(",").join(", ")}.
          </span>
        </p>
        <p className="font-semibold">
          Cooking Method:{" "}
          <span className="font-normal text-sm">
            {cookingMethod.split(" ").join("\n")}
          </span>
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={() => {
              handleDisabled(), notify();
            }}
            className={`btn border-none bg-green-600 ${
              disabled ? "btn-disabled" : "btn-active"
            }`}
          >
            Add to Favourite
          </button>
          <ToastContainer autoClose={1500}></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsCard;
