import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import minhaImagem from "../../assets/avatar1.png";
import "./Home.css";

export function Home() {
  const [products, setProducts] = useState([]);
  const nome = localStorage.getItem("nomeUsuario");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await fetch("http://localhost:3001/api/product", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        });

        if (result.ok) {
          const data = await result.json();
          setProducts(data);
        } else {
          console.error("Erro ao buscar produtos");
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="home-container">
      {/* Navbar mantida igual */}
      <header className="home-header">
        <Link to="/home" className="home-logo">
          Supermarket
        </Link>
        <nav className="home-nav">
          <ul>
            <li>
              <Link to="/home">Início</Link>
            </li>
            <li>
              <Link to="/produtos">Promoções</Link>
            </li>
            <li>
              <Link to="/FAQ">FAQ</Link>
            </li>
          </ul>
        </nav>
        <div className="user-area">
          <div id="user-info">
            <button>
              <img src={minhaImagem} alt="Perfil" />
            </button>
            <span>{nome}</span>
          </div>

          <Link to="/login">
            <button className="logout-btn">Sair</button>
          </Link>
        </div>
      </header>

      <main className="home-content">
        <h1>Bem-vindo(a), {nome}!</h1>
        <p>Lista de produtos disponíveis no estoque:</p>

        {/* CORREÇÃO 2: Adicionei uma classe para estilizar */}
        <table className="zebra-table">
          <thead>
            <tr>
              <th>Nome do Produto</th>
              <th>Preço</th>
              <th>Estoque</th>
              <th>Validade</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              /* Usamos o _id do Mongo como chave única */
              <tr key={product._id}>
                <td>{product.name}</td>
                {/* Formatando o preço para Real */}
                <td>R$ {product.price.toFixed(2)}</td>
                <td>{product.stock} un.</td>
                {/* Formatando a data de forma simples */}
                <td>
                  {product.validity
                    ? new Date(product.validity).toLocaleDateString("pt-BR")
                    : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
