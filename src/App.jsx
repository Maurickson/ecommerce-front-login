// src/App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

// Não precisamos mais do useState ou dos ícones aqui!

function App() {
  // O <Outlet> é um placeholder. 
  // O React Router vai trocar ele por <Login />, <SignUp /> ou <Home />
  // dependendo da URL.
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default App;