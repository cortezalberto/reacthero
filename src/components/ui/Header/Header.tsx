// Importación de Container, Nav, Navbar desde "react-bootstrap" para crear la barra de navegación
import { Container, Nav, Navbar } from "react-bootstrap";
// Importación de Link desde "react-router-dom" para crear enlaces de navegación
import { Link } from "react-router-dom";
// Importación del hook useAppDispatch desde "../../../hooks/redux" para obtener el despachador de acciones de Redux
import { useAppDispatch } from "../../../hooks/redux";
// Importación de la acción setLogout desde "../../../redux/slices/auth" para manejar el cierre de sesión
import { setLogout } from "../../../redux/slices/auth";

// Definición del componente Header
export const Header = () => {
  // Obtención del despachador de acciones de Redux
  const dispatch = useAppDispatch();

  // Función handleLogout para manejar el cierre de sesión
  const handleLogout = () => {
    // Despacha la acción setLogout para realizar el cierre de sesión
    dispatch(setLogout());
  };

  // Devolución del JSX que representa la barra de navegación
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        {/* Marca de la barra de navegación */}
        <Navbar.Brand>
          {/* Enlace de navegación para volver al inicio */}
          <Link to={"/"} className="nav-link">
            Inicio
          </Link>
        </Navbar.Brand>
        {/* Elementos de navegación */}
        <Nav className="me-auto">
          <Nav.Item>
            {/* Enlace de navegación para buscar héroes */}
            <Link to={"/search"} className="nav-link">
              Buscar Heroe
            </Link>
          </Nav.Item>
          <Nav.Item>
            {/* Enlace de navegación para ver héroes de DC */}
            <Link to={"/dcHeroes"} className="nav-link">
              DC Heroes
            </Link>
          </Nav.Item>
          <Nav.Item>
            {/* Enlace de navegación para ver héroes de Marvel */}
            <Link to={"/marvelHeroes"} className="nav-link">
              Marvel Heroes
            </Link>
          </Nav.Item>
        </Nav>
        {/* Elementos de la barra de navegación a la derecha */}
        <Navbar.Collapse className="justify-content-end gap-2">
          {/* Texto que muestra el usuario actualmente logueado */}
          <Navbar.Text>Ingresado como : Admin</Navbar.Text>
          <Nav.Item>
            {/* Elemento de navegación para cerrar sesión */}
            <div
              className="d-flex justify-content-center align-items-center"
              onClick={handleLogout}
            >
              {/* Ícono de logout */}
              <span
                style={{ color: "#fff", cursor: "pointer" }}
                className="material-symbols-outlined"
              >
                logout
              </span>
            </div>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
