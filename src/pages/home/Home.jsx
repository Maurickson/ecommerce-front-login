// src/pages/home/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Para os links de navegação
import './Home.css'; // <-- Importando nosso novo CSS

export function Home() {
  return (
    <div className="home-container">
      
      {/* 1. O Cabeçalho (Navbar) */}
      <header className="home-header">
        
        {/* Logo (que pode ser um link para a home) */}
        <Link to="/home" className="home-logo">
          MeuEcommerce
        </Link>

        {/* Links de Navegação */}
        <nav className="home-nav">
          <ul>
            <li><Link to="/home">Início</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/perfil">Meu Perfil</Link></li>
          </ul>
        </nav>

        {/* Botão de Sair */}
        <div>
          {/* Por enquanto, o botão de Sair leva para o Login */}
          <Link to="/login">
            <button className="logout-btn">
              Sair
            </button>
          </Link>
        </div>
      </header>

      {/* 2. O Conteúdo Principal */}
      <main className="home-content">
        <h1>Bem-vindo, Mauro!</h1>
        <p>Este é o dashboard principal do seu e-commerce.</p>
        <p>Daqui você poderá gerenciar produtos, ver pedidos e muito mais.</p>
      </main>

    </div>
  );
}