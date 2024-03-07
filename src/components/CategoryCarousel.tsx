import React, { useEffect, useState } from "react";
import axios from "axios";
import { Movies, Props } from "../types/types";
import { useAppDispatch } from "../hooks/redux";
import Slider from "react-slick";

// import required modules
import { useNavigate } from "react-router-dom";
import { setMovie } from "../features/user/movieSlice";
import Loading from "./Loading";

const CategoryCarousel = ({ title, url }: Props) => {
  //States
  const [movies, setMovies] = useState<Array<Movies>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  //Consts
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  }

  //Functions
  const getMovies = async (): Promise<void> => {
    try {
      const baseURL = 'https://api.themoviedb.org/3/';
      const { data } = await axios.get(baseURL + url);
      const movies = data.items;
  
      // Muestra la cantidad total de películas
      const totalMovies = movies.length;
      console.log(`Cantidad total de películas: ${totalMovies}`);
  
      setMovies(movies);
    } catch (err) {
      console.log("Hubo un error: ", err);
    }
    setIsLoading(false);
  };
  

  const navigateToDetails = (movieId: number) => {
    dispatch(setMovie(movieId));
    navigate(`/details?movieID=${movieId}`);
  };

  //UseEffect
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {!isLoading ? (
        <div className="py-3 space-y-3 w-full">
          <h3
            className="cursor-default inline text-xl text-light transition"
          >
            {title}
          </h3>
          <Slider {...settings} className="overflow-hidden mt-2 md:overflow-visible md:-mx-2"
          >
            {movies?.map((movie, idx) => {
              return (
                <div
                  key={idx}
                >
                  {
                    <div
                      onClick={() => navigateToDetails(movie.id)}
                      className="relative mx-2 rounded-lg group cursor-pointer flex items-center overflow-hidden transition shadow-lg"
                    >
                      <div className="absolute h-full w-full px-2 bg-black opacity-0 bg-opacity-50 flex justify-center items-center transition group-hover:opacity-100">
                        <div className="translate-y-full transition group-hover:translate-y-0">
                          <h5 className="text-white text-lg font-semibold text-center">
                            {movie.title || movie.name}
                          </h5>
                        </div>
                      </div>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt="movie poster"
                        className=" max-w-full w-full align-middle"
                        loading="lazy"
                      />
                    </div>
                  }
                </div>
              );
            })}
          </Slider>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CategoryCarousel;
