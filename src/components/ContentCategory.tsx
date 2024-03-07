import React, {useEffect} from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../hooks/redux";
import requests from "../requests";
import CategoryCarousel from "./CategoryCarousel";

const ContentCategory = () => {
  //States & Selectors
  const currentCategory = useAppSelector((state) => state.category);
  const {isLoggedIn} = useAppSelector((state) => state.user);
  const navigate = useNavigate()

  //UseEffect
  useEffect(() => {
    !isLoggedIn && navigate('/')
  }, []);
  return (
    <div className="container m-auto py-3 space-y-2 px-6 lg:px-14">
      {currentCategory.name === "disney" && (
        <>
          <CategoryCarousel
            title={"Originales de Disney"}
            url={requests.fetchDisney}
          />
          <CategoryCarousel
            title={"Clásicos"}
            url={requests.fetchDisneyClassics}
          />
          <CategoryCarousel title={"Novedades"} url={requests.fetchDisneyNews} />
        </>
      )}
      {currentCategory.name === "pixar" && (
        <>
          <CategoryCarousel title={"Películas de Pixar"}url={requests.fetchPixar}/>
          <CategoryCarousel title={"Toy Story"} url={requests.fetchToyStory} />
          <CategoryCarousel title={"Cars"} url={requests.fetchCars} />
        </>
      )}
      {currentCategory.name === "marvel" && (
        <>
          <CategoryCarousel
            title={"Universo de Marvel"}
            url={requests.fetchMarvel}
          />
          <CategoryCarousel
            title={"Universo de Marvel: Fase uno"}
            url={requests.fetchMarvelPhaseOne}
          />
          <CategoryCarousel
            title={"Universo de Marvel: Fase dos"}
            url={requests.fetchMarvelPhaseTwo}
          />
          <CategoryCarousel
            title={"Universo de Marvel: Fase tres"}
            url={requests.fetchMarvelPhaseThree}
          />
        </>
      )}
      {currentCategory.name === "star-wars" && (
        <>
          <CategoryCarousel
            title={"Colección de Star Wars"}
            url={requests.fetchStarWars}
          />
          <CategoryCarousel
            title={"Star Wars Lego"}
            url={requests.fetchStarWarsLego}
          />
        </>
      )}
      {currentCategory.name === "national-geographic" && (
        <>
          <CategoryCarousel title={"Documentales"} url={requests.fetchNationalGeographic} />
        </>
      )}
    </div>
  );
};

export default ContentCategory;
