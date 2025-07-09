import "./App.css";
import Create from "./pages/create/Create";
import Home from "./pages/home/Home";
import Navbar from "../src/components/navbar/Navbar";
import Recipe from "./pages/recipe/Recipe";
import Search from "./pages/search/Search";
import { Route, Routes } from "react-router-dom";
import ThemeSelector from "./components/themeSelector/ThemeSelector";
import { useTheme } from "./context/ThemeContext";
function App() {
  
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <Navbar />
      <ThemeSelector />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
