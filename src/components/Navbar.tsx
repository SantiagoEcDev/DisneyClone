import React, { useState } from "react";
import logo from "../assets/logo.png";
import { AiFillHome, AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { RiMovie2Fill } from "react-icons/ri";
import { TbDeviceTvOld } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";
import { logOut } from "../features/user/userSlice";
import avatar from "../assets/avatar.webp";

const Navbar = () => {
  // States
  const [displayUserOptions, setDisplayUserOptions] = useState<boolean>(false);
  const [searchMode, setSearchMode] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // Functions
  const signOut = (): void => {
    dispatch(logOut());
    navigate("/");
  };

  const handleSearchButtonClick = (): void => {
    setSearchMode(true);
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Búsqueda realizada:', searchQuery);
    setSearchQuery('');
  };

  return (
    <nav className="from-black to-transparent bg-gradient-to-b w-full relative z-50">
      <div className="container m-auto flex justify-between items-center py-6 px-6 lg:px-14">
        <div className="flex items-center">
          <Link to={"/home"}>
            <img src={logo} alt="logo" className="w-10 h-auto mr-10" />
          </Link>
          <ul className="hidden md:flex items-center space-x-6 text-sm font-semibold text-light">
            <li className="relative group">
              <Link
                to="/home"
                className="flex items-center space-x-2 transition"
              >
                <AiFillHome />
                <h5>INICIO</h5>
              </Link>
              <div className="absolute mt-2 h-0.5 w-full bg-white scale-0 transition duration-300 origin-left group-hover:scale-100"></div>
            </li>
            <li className="relative group">
              {searchMode ? (
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Buscar..."
                    className="text-light bg-transparent border-none focus:outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit" className="hidden">
                    <AiOutlineSearch />
                  </button>
                </form>
              ) : (
                <button onClick={handleSearchButtonClick} className="flex items-center space-x-2 transition ">
                  <AiOutlineSearch />
                  <h5>BUSCAR</h5>
                </button>
              )}
              <div className="absolute mt-2 h-0.5 w-full bg-white scale-0 transition duration-300 origin-left group-hover:scale-100"></div>
            </li>
            <li className="relative group">
              <a href="#" className="flex items-center space-x-2 transition ">
                <AiOutlinePlus />
                <h5>MI LISTA</h5>
              </a>
              <div className="absolute mt-2 h-0.5 w-full bg-white scale-0 transition duration-300 origin-left group-hover:scale-100"></div>
            </li>
            <li className="relative group">
              <a href="#" className="flex items-center space-x-2 transition ">
                <RiMovie2Fill />
                <h5>PELÍCULAS</h5>
              </a>
              <div className="absolute mt-2 h-0.5 w-full bg-white scale-0 transition duration-300 origin-left group-hover:scale-100"></div>
            </li>
            <li className="relative group">
              <a href="#" className="flex items-center space-x-2 transition">
                <TbDeviceTvOld />
                <h5>SERIES</h5>
              </a>
              <div className="absolute mt-2 h-0.5 w-full bg-white scale-0 transition duration-300 origin-left group-hover:scale-100"></div>
            </li>
          </ul>
        </div>
        <ul className="relative flex items-center space-x-6 text-sm font-semibold text-light">
          <li>
            <div>
              <button className="rounded-full overflow-hidden w-10 border-2 border-transparent transition duration-150 hover:border-seccondary" onClick={() => setDisplayUserOptions(!displayUserOptions)}>
                <img src={avatar} alt="avatar" className="" />
              </button>
                <div className={`transition opacity-0 ${displayUserOptions && 'opacity-100'} absolute top-12 right-0 flex flex-col text-end space-y-4 py-5 pl-8 pr-4 bg-dark rounded-tl-lg rounded-b-lg bg-opacity-90 backdrop-blur-sm shadow-2xl`}>
                  <a href="#" className="text-gray-600">Perfil</a>
                  <a href="#" className="text-gray-600">Configuración</a>
                  <a href="#" onClick={() => signOut()} className="transition hover:text-gray-400">
                    Cerrar sesión
                  </a>
                </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
