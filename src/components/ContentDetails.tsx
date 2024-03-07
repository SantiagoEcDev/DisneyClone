import React, { useState, useEffect } from "react";
import axios from "axios";
import { Movie } from "../types/types";
import { useAppSelector } from "../hooks/redux";
import { BsFillPlayFill } from "react-icons/bs";
import { useNavigate } from "react-router";

const ContentDetails = () => {
  //States & selectors
  const [movie, setMovie] = useState<Movie>();
  const movieID = useAppSelector((state) => state.movie.id);
  const {isLoggedIn} = useAppSelector((state) => state.user);
  const navigate = useNavigate()

  //Consts
  const apiKey = `2a41be38cf4e873b54fce8c7ff94a6f5`;
  const url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=es-ES`;

  //Functions
  const getMovie = async (): Promise<void> => {
    const { data } = await axios.get(url);
    setMovie(data);
  };

  //useEffect
  useEffect(() => {
    !isLoggedIn && navigate('/')
    getMovie();
  }, []);
  return (
    <div className="relative container m-auto sm:top-0 sm:min-h-screen sm:flex sm:justify-center">
      <div className="relative sm:w-screen sm:min-h-screen sm:fixed sm:top-0">
        <div className="absolute bg-dark opacity-40 w-full h-full z-10 lg:opacity-70"></div>
        <div className="absolute hidden from-dark via-dark to-transparent bg-gradient-to-t w-full bottom-0 z-10 sm:block sm:h-full md:h-5/6 lg:hidden xl:hidden"></div>
        <img
          src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`}
          className="sm:w-full sm:fixed lg:object-cover lg:h-full xl:object-cover"
        />
      </div>
      <div className="relative mx-auto z-10 text-white pt-6 pb-10 space-y-6 px-6 w-full sm:pt-60 sm:pl-6 sm:px-0 lg:pl-10">
        <h1 className="text-4xl font-semibold ">{movie?.title}</h1>
        <div className="space-y-4 sm:space-x-4 sm:space-y-0">
          <button className="w-full font-semibold py-4 rounded bg-white text-black border-2 border-white transition sm:w-auto sm:px-8 hover:bg-seccondary hover:border-seccondary">
            <BsFillPlayFill className="inline mr-2" /> <span className=" align-middle"> MIRAR AHORA</span>
          </button>
          <button className="w-full font-semibold py-4 rounded bg-black text-white border-2 border-white sm:w-auto sm:px-8 transition hover:bg-transparent hover:text-white">
            <BsFillPlayFill className="inline mr-2" /> <span className=" align-middle"> TRAILER</span>
          </button>
          
        </div>
        <p className="text-xl lg:w-2/3 text-start">{movie?.overview ? movie.overview : 'El resumen no se encuentra disponible actualmente.'}</p>
      </div>
    </div>
  );
};

export default ContentDetails;
