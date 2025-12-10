import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Auth.css";

import { FaGoogle, FaLinkedinIn, FaGithub, FaUserPlus } from "react-icons/fa";
import { MdEmail, MdLock, MdError } from "react-icons/md";
import { FaIdCard } from "react-icons/fa";
import Cookies from "js-cookie";

export function SignUp() {
  const navigate = useNavigate();

  // Estados dos campos
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name || !email || !password || !cpf) {
      setErrorMessage("Preencha todos os campos.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3001/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          pass: password,
          cpf: cpf,
        }),
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
        setErrorMessage(json.message || json.error || "Erro ao criar conta.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      setErrorMessage("Erro de conexão com o servidor.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="auth-background">
      <div className="form-wrapper">
        <div className="form-container">
          <form onSubmit={handleSignUpSubmit}>
            <h1>Create Account</h1>

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

            {/* Name */}
            <div className="input-group">
              <span className="input-icon-wrapper">
                <FaUserPlus className="input-icon" />
              </span>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="input-group">
              <span className="input-icon-wrapper">
                <MdEmail className="input-icon" />
              </span>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* CPF */}
            <div className="input-group">
              <span className="input-icon-wrapper">
                <FaIdCard className="input-icon" />
              </span>
              <input
                type="text"
                placeholder="CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="input-group">
              <span className="input-icon-wrapper">
                <MdLock className="input-icon" />
              </span>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Mensagem de erro */}
            {errorMessage && (
              <div className="error-message">
                <MdError />
                <span>{errorMessage}</span>
              </div>
            )}

            <button type="submit" className="sign-in-btn" disabled={isLoading}>
              {isLoading ? "Carregando..." : "Sign Up"}
            </button>

            <span className="switch-auth-link">
              Já tem uma conta?{" "}
              <Link to="/login">
                <strong>Faça Login</strong>
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
