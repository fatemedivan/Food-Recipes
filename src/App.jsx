import Create from "./pages/create/Create";
import Home from "./pages/home/Home";
import Navbar from "../components/navbar/Navbar";
import Recipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search";
import "./App.css";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/create" element={<Create />} />
          <Route path="/recipe/:id" element={<Recipe/>}/>
          <Route path="/search" element={<Search />}/>
      </Routes>
    </>
  );
}

export default App;
