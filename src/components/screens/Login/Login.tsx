// Importación de Button y Form desde "react-bootstrap" para crear elementos de formulario
import { Button, Form } from "react-bootstrap";
// Importación de estilos CSS del módulo "./Login.module.css"
import styles from "./Login.module.css";
// Importación de useState y FormEvent desde "react" para manejar el estado local y eventos del formulario
import { FormEvent, useState } from "react";
// Importación del hook useForm desde "../../../hooks/useForm" para manejar el estado del formulario
import { useForm } from "../../../hooks/useForm";
// Importación del hook useAppDispatch desde "../../../hooks/redux" para obtener el despachador de acciones de Redux
import { useAppDispatch } from "../../../hooks/redux";
// Importación de la acción setLogin desde "../../../redux/slices/auth" para manejar el inicio de sesión
import { setLogin } from "../../../redux/slices/auth";
// Importación del hook useNavigate desde "react-router-dom" para la navegación
import { useNavigate } from "react-router-dom";

// Definición del componente funcional Login
export const Login = () => {
  // Estado local para controlar la visibilidad de la contraseña
  const [showPass, setShowPass] = useState(false);

  // Uso del hook useForm para manejar el estado del formulario de inicio de sesión
  const { values, handleChange } = useForm({
    user: "",
    password: "",
  });
  const { user, password } = values;

  // Obtención del despachador de acciones de Redux
  const dispatch = useAppDispatch();
  // Obtención de la función navigate para la navegación
  const navigate = useNavigate();

  // Función para manejar el envío del formulario de inicio de sesión
  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Obtener los datos de usuario desde un archivo JSON simulado
    const response = await fetch("/user.json");
    const usersData = await response.json();
    // Buscar el usuario en los datos de usuario
    const userFound = usersData.users.find(
      (u: { username: string; password: string }) =>
        u.username === user && u.password === password
    );
    // Si se encuentra el usuario, iniciar sesión y redirigir al usuario a la página de inicio
    if (userFound) {
      dispatch(setLogin(user));
      navigate("/");
    } else {
      alert("Usuario o contraseña no encontrados");
    }
  };

  // Devolución del JSX que representa el formulario de inicio de sesión
  return (
    <div className={styles.containerLogin}>
      <div className={styles.containerForm}>
        {/* Icono de usuario */}
        <span
          style={{ fontSize: "10vh" }}
          className="material-symbols-outlined"
        >
          group
        </span>
        {/* Formulario de inicio de sesión */}
        <Form onSubmit={handleSubmitForm}>
          {/* Campo de entrada para el nombre de usuario */}
          <Form.Group className="mb-3">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="user"
              value={user}
              type="text"
              placeholder="Usuario"
            />
          </Form.Group>
          {/* Campo de entrada para la contraseña */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              name="password"
              value={password}
              onChange={handleChange}
              type={showPass ? "text" : "password"}
              placeholder="Contraseña"
            />
          </Form.Group>
          {/* Interruptor para mostrar/ocultar la contraseña */}
          <Form.Check
            type="switch"
            onChange={() => {
              setShowPass(!showPass);
            }}
            id="custom-switch"
            label="Mostrar Contraseña"
          />
          {/* Botón para enviar el formulario de inicio de sesión */}
          <div className="d-flex justify-content-center align-items-center mt-2">
            <Button type="submit" variant="primary">
              Ingresar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
