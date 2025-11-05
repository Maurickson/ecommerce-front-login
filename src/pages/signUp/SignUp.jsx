// src/pages/signup/SignUp.jsx

import React from 'react';
// 1. IMPORTAMOS O useNavigate
import { Link, useNavigate } from 'react-router-dom'; 
import '../../Auth.css'; 

// ... (imports de ícones)
import { FaGoogle, FaLinkedinIn, FaGithub, FaUserPlus } from 'react-icons/fa'; 
import { MdEmail, MdLock } from 'react-icons/md'; 

export function SignUp() {
  // 2. INICIALIZAMOS O HOOK
  const navigate = useNavigate();

  // 3. CRIAMOS A FUNÇÃO DE SUBMIT
  const handleSignUpSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento

    //
    // AQUI VIRIA A LÓGICA DE CRIAÇÃO DA CONTA
    //

    // 4. NAVEGAMOS PARA A HOME
    navigate('/home');
  };

  return (
    <div className="auth-background">
      <div className="form-wrapper">
        <div className="form-container">
          
          {/* 5. LIGAMOS A FUNÇÃO AO onSUbmit DO FORMULÁRIO */}
          <form onSubmit={handleSignUpSubmit}>
            <h1>Create Account</h1>
              <div className="social-icons">
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <FaGoogle />
              </a>
              <a href="https://www.linkedin.com/login" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://www.github.com/login" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
            <p>or use your email for registration</p>

            <div className="input-group">
              <span className="input-icon-wrapper"><FaUserPlus className="input-icon" /></span>
              <input type="text" placeholder="Name" />
            </div>
            <div className="input-group">
              <span className="input-icon-wrapper"><MdEmail className="input-icon" /></span>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-group">
              <span className="input-icon-wrapper"><MdLock className="input-icon" /></span>
              <input type="password" placeholder="Password" />
            </div>
            
            <button type="submit" className="sign-in-btn">Sign Up</button>

            <span className="switch-auth-link">
              Já tem uma conta? <Link to="/login"><strong>Faça Login</strong></Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}