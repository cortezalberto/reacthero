// Importación de createSlice y PayloadAction desde "@reduxjs/toolkit" para crear un slice de Redux
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Definición de la interfaz IInitialState para representar el estado inicial del slice
interface IInitialState {
  // Nombre de usuario actual, puede ser una cadena de texto o null
  user: string | null;
  // Estado de inicio de sesión, indica si el usuario está autenticado o no
  isLogged: boolean;
}

// Estado inicial del slice
const initialState: IInitialState = {
  user: null,
  isLogged: false,
};

// Creación del slice de Redux llamado AuthUser
const AuthUser = createSlice({
  // Nombre del slice
  name: "AuthUser",
  // Estado inicial del slice
  initialState,
  // Reductores del slice
  reducers: {
    // Reductor para establecer el inicio de sesión
    setLogin: (state, action: PayloadAction<string>) => {
      // Establece el nombre de usuario y marca al usuario como autenticado
      state.user = action.payload;
      state.isLogged = true;
    },
    // Reductor para establecer el cierre de sesión
    setLogout: (state) => {
      // Establece el nombre de usuario como null y marca al usuario como no autenticado
      state.user = null;
      state.isLogged = false;
    },
  },
});

// Exportación de acciones creadas por el slice
export const { setLogin, setLogout } = AuthUser.actions;

// Exportación del reductor del slice
export default AuthUser.reducer;
