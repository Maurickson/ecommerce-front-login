// src/pages/login/Login.jsx

import React from 'react';
// 1. IMPORTAMOS O useNavigate JUNTO COM O Link
import { Link, useNavigate } from 'react-router-dom'; 
import '../../Auth.css'; 

// ... (imports de ícones)
import { FaGoogle, FaLinkedinIn, FaGithub } from 'react-icons/fa'; 
import { MdEmail, MdLock, MdError } from 'react-icons/md'; 

export function Login() {
  // 2. INICIALIZAMOS O HOOK
  const navigate = useNavigate();

  // 3. CRIAMOS A FUNÇÃO DE SUBMIT
  const handleLoginSubmit = (e) => {
    // Impede que o formulário recarregue a página
    e.preventDefault(); 
    
    //
    // AQUI VOCÊ COLOCARIA A LÓGICA DE VALIDAÇÃO (se email/senha estão corretos)
    //

    // 4. NAVEGAMOS PARA A HOME
    // Se a validação for ok, mandamos o usuário para a home
    navigate('/home');
  };

  return (
    <div className="auth-background">
      <div className="form-wrapper">
        <div className="form-container">
          
          {/* 5. LIGAMOS A FUNÇÃO AO onSUbmit DO FORMULÁRIO */}
          <form onSubmit={handleLoginSubmit}>
            <h1>Sign In To Developer</h1>
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
            <p>or use your email account</p>

            <div className="input-group">
              <span className="input-icon-wrapper"><MdEmail className="input-icon" /></span>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-group">
              <span className="input-icon-wrapper"><MdLock className="input-icon" /></span>
              <input type="password" placeholder="Password" />
            </div>
            
            <div className="error-message">
              <MdError />
              <span>Preencha este campo.</span>
            </div>
            
            <a href="#" className="forgot-password">Forgot your password?</a>
            
            {/* O type="submit" garante que ele vai disparar o onSubmit do <form> */}
            <button type="submit" className="sign-in-btn">Sign In</button>

            <span className="switch-auth-link">
              Não tem uma conta? <Link to="/signup"><strong>Cadastre-se</strong></Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}