import React from "react";
import pastabanner from "/pasta_banner.jpg";

const Testimonials = () => {
  return (
    <div>
      <section className="mt-16">
        <div
          style={{
            backgroundImage: `url(${pastabanner}), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,4))`,
            backgroundBlendMode: "overlay",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className=" px-4 py-8 mx-auto text-center lg:py-16 lg:px-6"
        >
          <div className="mb-12">
            <h2 className="font-bold text-white text-center lg:mt-12 text-3xl lg:text-4xl">
              What Customers<span className="text-red-800"></span> Are Saying
              About Us
            </h2>
          </div>
          <figure className="max-w-screen-md mx-auto">
            <svg
              className="h-12 mx-auto mb-3 text-green-500"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-xl lg:text-2xl font-medium text-white">
                “Many thanks for the beautiful food and wonderful service. Your
                food really made the event special. I appreciate your time and
                effort!”
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-white">
                <div className="pr-3 font-medium text-white dark:text-white">
                  Micheal Dre
                </div>
                <div className="pl-3 text-sm font-light text-white">
                  CEO at Grashhopper
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
