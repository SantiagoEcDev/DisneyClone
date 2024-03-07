import React from "react";
import requests from "../requests";
import Loading from "./Loading";
const CategoryCarousel = React.lazy(() => import('../components/CategoryCarousel'))

const MoviesRows = () => {
  return (
    <React.Suspense fallback={<Loading/>}>
      <CategoryCarousel
        title={"Originales de Disney"}
        url={requests.fetchDisney}
      />
      <CategoryCarousel
        title={"Películas de Pixar"}
        url={requests.fetchPixar}
      />
      <CategoryCarousel
        title={"Universo de Marvel"}
        url={requests.fetchMarvel}
      />
      <CategoryCarousel
        title={"Colección de Star Wars"}
        url={requests.fetchStarWars}
      />
    </React.Suspense>
  );
};

export default MoviesRows;
