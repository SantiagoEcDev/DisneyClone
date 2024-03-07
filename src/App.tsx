import { Route, Routes } from "react-router";
import ContentCategory from "./components/ContentCategory";
import ContentDetails from "./components/ContentDetails";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { useAppSelector } from "./hooks/redux";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const { isLoggedIn } = useAppSelector((state) => state.user);

  //TODO - borrar archivos innecesarios (imagenes, fetchs, types)
  return (
    <div className="bg-dark min-h-screen min-w-screen h-full">
      {isLoggedIn && <Navbar />}
      <ScrollToTop>
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category/:brand" element={<ContentCategory />} />
          <Route path="/details" element={<ContentDetails />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
