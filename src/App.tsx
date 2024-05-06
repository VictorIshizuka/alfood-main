import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RestaurantsShowcase from "./pages/RestaurantsShowcase";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<RestaurantsShowcase />} />
    </Routes>
  );
}

export default App;
