import { useEffect } from "react";
import { useAppSelector } from "../hooks/redux";
import { useNavigate } from "react-router";
import MainSlider from "./MainSlider";
import Cards from "./Cards";
import MoviesRows from "./MoviesRows";

const Home = () => {
  //States & consts
  const { isLoggedIn } = useAppSelector((state) => state.user);
  const navigate = useNavigate()

  //useEffect
  useEffect(() => {
    !isLoggedIn && navigate('/')
  }, []);

  return (
    <div className="container m-auto px-6 lg:px-14 pb-6">
      <MainSlider/>
      <Cards/>
      <MoviesRows/>
    </div>
  );
};

export default Home;
