import React from "react";
import { Card } from "../types/types";

const CategoryCard = ({ image, video, brand }: Card) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-2xl transition border-2 border-gray-600 group hover:scale-105 from-gray-700 to-dark bg-gradient-to-b">
      <div className="">
        <img src={image} alt="category image" className="w-full min-w-full relative z-20 pointer-events-none" />
        <video
          width="320"
          height="240"
          loop={true}
          playsInline={true}
          muted
          onMouseOver={(e) => (e.target as HTMLVideoElement).play()}
          onMouseOut={(e) => (e.target as HTMLVideoElement).pause()}
          className="w-full h-full absolute block bottom-0 left-0 right-0 top-0 rounded opacity-0 transition  object-cover group-hover:opacity-100 z-10"
        >
          <source src={video} type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
};

export default CategoryCard;