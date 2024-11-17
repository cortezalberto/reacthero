// Definición de la interfaz IHeroes para representar la estructura de un héroe
export interface IHeroes {
  // Identificador único del héroe, de tipo string
  id: string;
  // Nombre del superhéroe, de tipo string
  superhero: string;
  // Editorial del cómic al que pertenece el héroe, de tipo string
  publisher: string;
  // Identidad secreta o alter ego del héroe, de tipo string
  alter_ego: string;
  // Primera aparición del héroe en un cómic, de tipo string
  first_appearance: string;
  // Otros personajes relacionados con el héroe, de tipo string
  characters: string;
}
