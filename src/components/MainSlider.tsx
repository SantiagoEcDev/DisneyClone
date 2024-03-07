import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderImages } from "../utils";

const MainSlider = () => {
    const settings = {
        pauseOnHover: false,
        dots: true,
        accessibility: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 700,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "100px",
      }
      
  return (
    <section className="">
      <Slider {...settings} className="left-0 top-0 relative overflow-hidden ">
        {sliderImages.map((img) => {
          return (
            <div key={img.id} className="relative py-5 outline-none">
                <img src={img.textImage} alt="" className="textImage absolute left-0 z-20 w-full h-auto opacity-0 transition-opacity"/>
              <div>
                <img src={img.url} alt="" className="w-full rounded-lg block my-0 mx-auto"/>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default MainSlider;
