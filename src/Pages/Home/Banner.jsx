import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaLongArrowAltRight } from "react-icons/fa";
import pasta_banner from "/pasta_banner.jpg";
import dumplings from "/dumpling.jpg";
import soup from "/hotnSourSoup.jpg";
import chicken from "/kungfaoChicken.jpg";
import pancake from "/scallionPancakes.jpg";
import broccoli from "/beefandbroccoli.jpg";
import tofu from "/mapoTofu.jpg";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${pasta_banner}), linear-gradient(rgba(0,0,0,0),rgba(0,0,0,8))`,
        backgroundBlendMode: "overlay",
      }}
      className="bg-cover bg-center min-h-screen text-white px-4"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-10 w-full container mx-auto py-16 items-center">
        <div className="w-full px-5 lg:px-0 lg:w-2/5">
          <h2 className="text-white text-4xl lg:text-6xl leading-tight tracking-tighter font-bold">
            <span className="text-pink-500">Simmer & Savor:</span> Delicious
            Recipes to Delight Your Taste Buds
          </h2>
          <p className="text-white py-7">
            Food, glorious food! There's nothing quite like indulging in a
            delicious meal that satisfies both our hunger and our taste buds.
            From the spicy flavors of Indian cuisine to the comforting warmth of
            homemade soup, food has the power to bring us together and uplift
            our spirits.
          </p>
          <button className="bg-pink-600 px-6 py-2 rounded-md hover:bg-pink-400">
            Contact Us
          </button>
        </div>
        <div className="w-full px-2 lg:px-0 lg:w-3/5 pb-6">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[400px] lg:h-[600px] w-full"
                src={chicken}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[400px] lg:h-[600px] w-full"
                src={tofu}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[400px] lg:h-[600px] w-full"
                src={dumplings}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[400px] lg:h-[600px] w-full"
                src={soup}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[400px] lg:h-[600px] w-full"
                src={pancake}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[400px] lg:h-[600px] w-full"
                src={broccoli}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
