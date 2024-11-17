// Importación de los datos de héroes desde "../../../data/heroes"
import { heroesData } from "../../../data/heroes";
// Importación del componente ListHeroes para mostrar la lista de héroes
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes";

// Definición del componente funcional Home
export const Home = () => {
  // Devolución del componente ListHeroes que muestra todos los héroes
  return <ListHeroes heroes={heroesData} title="Todos los heroes" />;
};
