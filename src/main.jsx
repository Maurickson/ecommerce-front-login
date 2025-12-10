// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signUp/SignUp.jsx";
import { Home } from "./pages/home/Home";

// Aqui definimos as rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // O 'casco' principal
    children: [
      {
        path: "/", // Rota raiz, pode redirecionar para o login
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/produtos",
        element: <div>Página de Produtos (em breve)</div>,
      },
      {
        path: "/perfil",
        element: <div>Página de Perfil (em breve)</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
