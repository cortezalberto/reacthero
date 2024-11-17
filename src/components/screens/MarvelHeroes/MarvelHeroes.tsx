// Importación de useEffect y useState desde "react" para manejar efectos secundarios y estado local
import { useEffect, useState } from "react";
// Importación del componente ListHeroes para mostrar la lista de héroes
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes";
// Importación de los datos de héroes desde "../../../data/heroes"
import { heroesData } from "../../../data/heroes";
// Importación de la interfaz IHeroes desde "../../../types/IHeroes" para definir la forma de los héroes
import { IHeroes } from "../../../types/IHeroes";

// Definición del componente funcional MarvelHeroes
export const MarvelHeroes = () => {
  // Estado local para almacenar los héroes de Marvel
  const [heroes, setHeroes] = useState<IHeroes[]>([]);

  // Función para obtener los héroes de Marvel
  const handleGetHeroesMarvel = () => {
    // Filtrar los héroes de acuerdo con la editorial "Marvel Comics"
    const result = heroesData.filter(
      (hero) => hero.publisher === "Marvel Comics"
    );
    // Actualizar el estado local con los héroes de Marvel filtrados
    setHeroes(result);
  };

  // Efecto secundario que se ejecuta una vez al montar el componente para obtener los héroes de Marvel
  useEffect(() => {
    handleGetHeroesMarvel();
  }, []);

  // Devolución del componente ListHeroes que muestra la lista de héroes de Marvel
  return <ListHeroes heroes={heroes} title="Heroes Marvel" />;
};
