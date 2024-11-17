// Importación de useEffect y useState desde "react" para manejar efectos secundarios y estado local
import { useEffect, useState } from "react";
// Importación del hook useForm desde "../../../hooks/useForm" para manejar el estado del formulario
import { useForm } from "../../../hooks/useForm";
// Importación de la interfaz IHeroes desde "../../../types/IHeroes" para definir la forma de los héroes
import { IHeroes } from "../../../types/IHeroes";
// Importación de los datos de héroes desde "../../../data/heroes"
import { heroesData } from "../../../data/heroes";
// Importación de componentes de formulario desde "react-bootstrap"
import { Form, InputGroup } from "react-bootstrap";
// Importación del componente CardHero para mostrar tarjetas de héroe
import { CardHero } from "../../ui/CardHero/CardHero";
// Importación de estilos CSS del módulo "./Search.module.css"
import styles from "./Search.module.css";

// Definición del componente funcional Search
export const Search = () => {
  // Uso del hook useForm para manejar el estado del formulario de búsqueda
  const { values, handleChange } = useForm({
    search: "",
  });

  // Obtención del valor de búsqueda del formulario
  const { search } = values;

  // Estado local para almacenar los héroes que coinciden con la búsqueda
  const [heroes, setHeroes] = useState<IHeroes[]>([]);

  // Efecto secundario que se ejecuta cuando el valor de búsqueda cambia
  useEffect(() => {
    // Filtrar los héroes que coinciden con el valor de búsqueda
    const result = heroesData.filter((hero) =>
      hero.superhero.toLowerCase().trim().includes(search.toLowerCase().trim())
    );
    // Actualizar el estado local con los héroes filtrados
    setHeroes(result);
  }, [search]);

  // Devolución del JSX que representa la página de búsqueda de héroes
  return (
    <div className={styles.containerSearch}>
      {/* Formulario de búsqueda */}
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Text>Ingrese héroe</InputGroup.Text>
          {/* Campo de entrada para ingresar el término de búsqueda */}
          <Form.Control onChange={handleChange} type="text" name="search" />
        </InputGroup>
      </div>
      {/* Lista de héroes que coinciden con la búsqueda */}
      <div className={styles.containerListHeros}>
        {/* Verificar si hay héroes que coincidan con la búsqueda */}
        {heroes.length > 0 ? (
          // Si hay héroes que coinciden, mostrar cada héroe en una tarjeta
          <>
            {heroes.map((hero) => (
              <div key={hero.id} style={{ width: "80%" }}>
                <CardHero hero={hero} />
              </div>
            ))}
          </>
        ) : (
          // Si no hay héroes que coincidan, mostrar un mensaje indicando que no se encontraron coincidencias
          <div>
            <h2>No se encontraron coincidencias</h2>
          </div>
        )}
      </div>
    </div>
  );
};
