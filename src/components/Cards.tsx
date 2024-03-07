import React from "react";
import CategoryCard from "./CategoryCard";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";
import { setCategory } from "../features/user/categorySlice";

const Cards = () => {
  //Consts
  const navigate = useNavigate()
  const dipsatch = useAppDispatch()
  const data = [
    {
      brand: "disney",
      image:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=600&aspectRatio=1.78&format=png",
      video:
        "https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564674844-disney.mp4",
    },
    {
      brand: "pixar",
      image:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F4E1A299763030A0A8527227AD2812C049CE3E02822F7EDEFCFA1CFB703DDA5/scale?width=600&aspectRatio=1.78&format=png",
      video:
        "https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676714-pixar.mp4",
    },
    {
      brand: "marvel",
      image:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/scale?width=600&aspectRatio=1.78&format=png",
      video:
        "https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676115-marvel.mp4",
    },
    {
      brand: "star-wars",
      image:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/scale?width=600&aspectRatio=1.78&format=png",
      video:
        "https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/04/03/1585929840-star-wars.mp4",
    },
    {
      brand: "national-geographic",
      image:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2EF24AA0A1E648E6D1A3B26491F516632137ED87AB22969D153316F8BD670FB5/scale?width=600&aspectRatio=1.78&format=png",
      video:
        "https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676296-national-geographic.mp4",
    },
  ];

  //Functions
  const navigateToCategory = (cardCategory: string): void => {
    dipsatch(setCategory({name: cardCategory}))
    navigate(`/category/${cardCategory}`)
  }
  
  return (
    <section className=" mt-15 mb-8">
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
        {data.map((card, idx) => (
          <div key={idx} onClick={() => navigateToCategory(card.brand)} className="cursor-pointer">
            <CategoryCard
              key={card.brand}
              brand={card.brand}
              video={card.video}
              image={card.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
