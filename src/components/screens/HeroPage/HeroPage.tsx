// Importación de useEffect y useState desde "react" para manejar efectos secundarios y estado local
import { useEffect, useState } from "react";
// Importación de la interfaz IHeroes desde "../../../types/IHeroes" para definir la forma de los héroes
import { IHeroes } from "../../../types/IHeroes";
// Importación de useNavigate y useParams desde "react-router-dom" para la navegación y obtener parámetros de la URL
import { useNavigate, useParams } from "react-router-dom";
// Importación de los datos de héroes desde "../../../data/heroes"
import { heroesData } from "../../../data/heroes";
// Importación de estilos CSS del módulo "./HeroPage.module.css"
import styles from "./HeroPage.module.css";
// Importación del componente Button desde "react-bootstrap" para crear botones
import { Button } from "react-bootstrap";

// Definición del componente funcional HeroPage
export const HeroPage = () => {
  // Estado local para almacenar la información del héroe actual
  const [hero, setHero] = useState<IHeroes | null>(null);
  // Obtención del parámetro de la URL correspondiente al ID del héroe
  const { id } = useParams();

  // Función para obtener el héroe por su ID
  const getHeroById = () => {
    // Buscar el héroe en los datos de héroes utilizando su ID
    const result = heroesData.find((h) => h.id === id);
    // Si se encuentra el héroe, actualizar el estado local con su información, de lo contrario, establecer el estado en null
    result ? setHero(result) : setHero(null);
  };

  // Efecto secundario que se ejecuta una vez al montar el componente para obtener el héroe por su ID
  useEffect(() => {
    getHeroById();
  }, []);

  // Función navigate para la navegación hacia atrás
  const navigate = useNavigate();
  const handleNavigate = () => {
    // Navegar hacia atrás en la historia del navegador
    navigate(-1);
  };

  // Devolución del JSX que representa la página del héroe
  return (
    <>
      {hero && (
        <div className={styles.containerHeroPage}>
          {/* Contenedor de la imagen del héroe */}
          <div className={styles.containerImgHeroPage}>
            <img src={`/assets/heroes/${id}.jpg`} alt={hero.superhero} />
          </div>
          {/* Contenedor de la información del héroe */}
          <div>
            <h3>{hero.superhero}</h3>
            <ul>
              <li>
                <b>Alter ego:</b> {hero.alter_ego}
              </li>
              <li>
                <b>Publicadora:</b> {hero.publisher}
              </li>
              <li>
                <b>Primera Aparicion:</b> {hero.first_appearance}
              </li>
            </ul>
            {/* Botón para regresar */}
            <Button variant="primary" onClick={handleNavigate}>
              Regresar
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
