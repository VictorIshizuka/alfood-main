import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RestaurantsShowcase from "./pages/RestaurantsShowcase";
import { AdminRestaurants } from "./pages/Admin/Restaurants";
import { FormRestaurant } from "./pages/Admin/Restaurants/FormRestaurant";
import { AppBarLayout } from "./pages/Admin/AppBar";
import { AdminPratos } from "./pages/Admin/Pratos";
import { FormPratos } from "./pages/Admin/Pratos/FormPratos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/restaurantes" element={<RestaurantsShowcase />} />

      <Route path="/admin" element={<AppBarLayout />}>
        <Route path="/admin/restaurantes" element={<AdminRestaurants />} />
        <Route path="/admin/restaurantes/novo" element={<FormRestaurant />} />
        <Route path="/admin/restaurantes/:id" element={<FormRestaurant />} />

        <Route path="/admin/pratos" element={<AdminPratos />} />
        <Route path="/admin/pratos/novo" element={<FormPratos />} />
      </Route>
    </Routes>
  );
}

export default App;
