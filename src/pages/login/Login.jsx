import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Auth.css";

import { FaGoogle, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail, MdLock, MdError } from "react-icons/md";
import Cookies from "js-cookie";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // FUNÇÃO DE SUBMIT DO LOGIN
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3001/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, pass: password }),
    });

    const json = await response.json();

    if (response.ok) {
      // Salvar token
      if (json.token) {
        Cookies.set("token", json.token);
      }

      // Salvar nome do usuário
      if (json.name) {
        localStorage.setItem("nomeUsuario", json.name);
      }

      navigate("/home");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="auth-background">
      <div className="form-wrapper">
        <div className="form-container">
          <form onSubmit={handleLoginSubmit}>
            <h1>Bem vindo ao nosso Supermercado!</h1>

            <div className="social-icons">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGoogle />
              </a>
              <a
                href="https://www.linkedin.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.github.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>

            <div className="input-group">
              <span className="input-icon-wrapper">
                <MdEmail className="input-icon" />
              </span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
              />
            </div>

            <div className="input-group">
              <span className="input-icon-wrapper">
                <MdLock className="input-icon" />
              </span>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </div>

            <div className="error-message">
              <MdError />
              <span>Preencha este campo.</span>
            </div>

            <button type="submit" className="sign-in-btn">
              Sign In
            </button>

            <span className="switch-auth-link">
              Não tem uma conta?{" "}
              <Link to="/signup">
                <strong>Cadastre-se</strong>
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
