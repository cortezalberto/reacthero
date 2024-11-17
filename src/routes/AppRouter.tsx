// Importación de Navigate, Route y Routes desde react-router-dom para configurar el enrutamiento
import { Navigate, Route, Routes } from "react-router-dom";
// Importación del componente de pantalla de inicio de sesión desde "../components/screens/Login/Login"
import { Login } from "../components/screens/Login/Login";
// Importación del hook useAppSelector desde "../hooks/redux" para acceder al estado del store de Redux
import { useAppSelector } from "../hooks/redux";
// Importación del componente de rutas protegidas desde "./ProtectedRoutes"
import { ProtectedRoutes } from "./ProtectedRoutes";

// Definición del componente AppRouter
export const AppRouter = () => {
  // Obtención del estado de autenticación desde el store de Redux utilizando useAppSelector
  const isLogged = useAppSelector((state) => state.auth.isLogged);

  // Devolución del componente Routes que define las rutas de la aplicación
  return (
    <>
      {/* Uso de Routes para definir las rutas */}
      <Routes>
        {/* Condicionalmente renderiza ProtectedRoutes si el usuario está autenticado, de lo contrario, redirige a la página de inicio de sesión */}
        {isLogged ? (
          <Route path="/*" element={<ProtectedRoutes />} />
        ) : (
          <Route path="/*" element={<Navigate to={"/login"} />} />
        )}
        {/* Ruta para la página de inicio de sesión */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
