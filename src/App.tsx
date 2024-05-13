import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RestaurantsShowcase from "./pages/RestaurantsShowcase";
import { AdminRestaurants } from "./pages/Admin/Restaurants";
import { FormRestaurant } from "./pages/Admin/Restaurants/FormRestaurant";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<RestaurantsShowcase />} />
      <Route path="/admin/restaurantes" element={<AdminRestaurants />} />
      <Route path="/admin/restaurantes/novo" element={<FormRestaurant />} />
      <Route path="/admin/restaurantes/:id" element={<FormRestaurant />} />
    </Routes>
  );
}

export default App;
