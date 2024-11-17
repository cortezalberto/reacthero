// Importación de Route y Routes desde react-router-dom para configurar el enrutamiento
import { Route, Routes } from "react-router-dom";
// Importación del componente Header desde "../components/ui/Header/Header"
import { Header } from "../components/ui/Header/Header";
// Importación de los componentes de las pantallas de la aplicación
import { Home } from "../components/screens/Home/Home";
import { Search } from "../components/screens/Search/Search";
import { DcHeroes } from "../components/screens/DcHeroes/DcHeroes";
import { MarvelHeroes } from "../components/screens/MarvelHeroes/MarvelHeroes";
import { HeroPage } from "../components/screens/HeroPage/HeroPage";

// Definición del componente ProtectedRoutes
export const ProtectedRoutes = () => {
  // Devolución del componente Routes que define las rutas protegidas de la aplicación
  return (
    <>
      {/* Renderiza el componente Header en todas las rutas protegidas */}
      <Header />
      {/* Definición de las rutas protegidas */}
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route path="/" element={<Home />} />
        {/* Ruta para la página de búsqueda */}
        <Route path="/search" element={<Search />} />
        {/* Ruta para la página de héroes de DC */}
        <Route path="/dcHeroes" element={<DcHeroes />} />
        {/* Ruta para la página de héroes de Marvel */}
        <Route path="/marvelHeroes" element={<MarvelHeroes />} />
        {/* Ruta para la página de detalles del héroe */}
        <Route path="/hero/:id" element={<HeroPage />} />
      </Routes>
    </>
  );
};
