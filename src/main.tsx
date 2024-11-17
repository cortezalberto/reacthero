// Importación de React para el uso de componentes de React
import React from "react";
// Importación de ReactDOM desde el cliente para renderizar componentes de React en el DOM
import ReactDOM from "react-dom/client";
// Importación del componente principal de la aplicación desde App.tsx
import App from "./App.tsx";
// Importación del estilo CSS de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Importación del Provider de React Redux para proporcionar el store a los componentes
import { Provider } from "react-redux";
// Importación del store de Redux desde store.ts
import { store } from "./redux/store/store.ts";
// Importación de BrowserRouter para el enrutamiento en React
import { BrowserRouter } from "react-router-dom";

// Llamada a ReactDOM.createRoot para crear un nuevo nodo raíz para renderizar componentes React en el DOM
ReactDOM.createRoot(document.getElementById("root")!).render(
  // Uso de React.StrictMode para activar el modo estricto de React
  <React.StrictMode>
    {/* Uso de BrowserRouter para envolver la aplicación y habilitar el enrutamiento */}
    <BrowserRouter>
      {/* Uso de Provider para proporcionar el store de Redux a todos los componentes de la aplicación */}
      <Provider store={store}>
        {/* Renderizado del componente principal de la aplicación */}
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
