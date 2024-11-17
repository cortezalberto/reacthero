// Importación de FC desde "react" para definir un componente funcional
import { FC } from "react";
// Importación de la interfaz IHeroes desde "../../../types/IHeroes" para definir la forma de los héroes
import { IHeroes } from "../../../types/IHeroes";
// Importación de estilos CSS del módulo "./ListHeroes.module.css"
import styles from "./ListHeroes.module.css";
// Importación del componente CardHero para mostrar tarjetas de héroe
import { CardHero } from "../CardHero/CardHero";

// Interfaz IListHeroes que define las propiedades del componente ListHeroes
interface IListHeroes {
  // Lista de héroes que se mostrarán
  heroes: IHeroes[];
  // Título de la lista de héroes
  title: string;
}

// Definición del componente funcional ListHeroes que muestra una lista de héroes
export const ListHeroes: FC<IListHeroes> = ({ heroes, title }) => {
  // Devolución del JSX que representa la lista de héroes
  return (
    <div className={styles.containerPinricpalList}>
      {/* Contenedor del título de la lista */}
      <div className={styles.containerTitle}>
        <h2>{title}</h2>
      </div>
      {/* Contenedor de la lista de héroes */}
      <div className={styles.conatainerList}>
        {/* Mapeo de la lista de héroes para mostrar cada héroe usando el componente CardHero */}
        {heroes.map((hero) => (
          <CardHero hero={hero} key={hero.id} />
        ))}
      </div>
    </div>
  );
};
