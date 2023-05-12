import React from "react";
import pasta_banner from "/pasta_banner.jpg";

const Contact = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${pasta_banner}), linear-gradient(rgba(0,0,0,0),rgba(0,0,0,8))`,
        backgroundBlendMode: "overlay",
      }}
      className="bg-cover bg-center min-h-screen text-white px-4 text-center"
    >
      <div className="lg:pt-24 pt-10 mx-auto">
        <h2 className="text-white text-4xl lg:text-6xl leading-tight tracking-tighter font-bold">
          <span className="">CONTACT </span>OUR SUPPORT TEAM
        </h2>
        <p className="text-white py-7">
          From classic dishes to innovative new recipes, our website is your
          ultimate guide to the world of cooking. Our expert chefs share their <br/>
          knowledge and passion for food, giving you the confidence to create
          unforgettable meals in your own kitchen.
        </p>
        <div className="flex gap-10 justify-center">
          <button className="bg-pink-600 px-6 py-2 rounded-md hover:bg-pink-600">
            Team Members
          </button>
          <button className="bg-pink-600 px-6 py-2 rounded-md hover:bg-pink-600">
            Chef of The Month
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
