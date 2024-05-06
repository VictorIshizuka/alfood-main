import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RestaurantsShowcase from "./pages/RestaurantsShowcase";
import { AdminRestaurants } from "./pages/Admin/Restaurants";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<RestaurantsShowcase />} />
      <Route path="/admin/restaurantes" element={<AdminRestaurants />} />
    </Routes>
  );
}

export default App;
