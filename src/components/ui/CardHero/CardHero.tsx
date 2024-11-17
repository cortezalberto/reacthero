// Importación de FC desde "react" para definir un componente funcional
import { FC } from "react";
// Importación de la interfaz IHeroes desde "../../../types/IHeroes" para definir la forma de los héroes
import { IHeroes } from "../../../types/IHeroes";
// Importación del componente Card desde "react-bootstrap" para mostrar la información del héroe
import { Card } from "react-bootstrap";
// Importación del hook useNavigate desde "react-router-dom" para navegar a la página de detalles del héroe
import { useNavigate } from "react-router-dom";

// Interfaz ICardHero que define las propiedades del componente CardHero
interface ICardHero {
  // Héroe que se mostrará en la tarjeta
  hero: IHeroes;
}

import styles from "./CardHero.module.css";
// Definición del componente funcional CardHero que muestra la información de un héroe en una tarjeta
export const CardHero: FC<ICardHero> = ({ hero }) => {
  // Hook useNavigate para manejar la navegación a la página de detalles del héroe
  const navigate = useNavigate();

  // Función handleNavigateHero para navegar a la página de detalles del héroe cuando se hace clic en la tarjeta
  const handleNavigateHero = () => {
    navigate(`/hero/${hero.id}`);
  };

  // Devolución del JSX que representa la tarjeta del héroe
  return (
    <Card
      className={styles.card}
      onClick={handleNavigateHero}
      style={{ width: "100%" }}
    >
      {/* Imagen del héroe */}
      <Card.Img variant="top" src={`/assets/heroes/${hero.id}.jpg`} />
      {/* Cuerpo de la tarjeta con la información del héroe */}
      <Card.Body>
        {/* Nombre del superhéroe */}
        <Card.Title>{hero.superhero}</Card.Title>
        {/* Información adicional del héroe */}
        <Card.Text>
          <p>
            {/* Alter ego del héroe */}
            <b>Alter Ego:</b> {hero.alter_ego}
          </p>
          <p>
            {/* Editorial del cómic */}
            <b>Publicadora:</b> {hero.publisher}
          </p>
          <p>
            {/* Primera aparición del héroe */}
            <b>Primera aparicion:</b> {hero.first_appearance}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
