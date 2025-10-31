import React, { useState } from 'react'; // Importamos o useState
import './App.css'; 

// Importando os ícones
import { FaGoogle, FaLinkedinIn, FaGithub, FaUserPlus } from 'react-icons/fa'; 
import { MdEmail, MdLock, MdError } from 'react-icons/md'; 

function App() {
  // Criamos um estado para controlar o painel ativo
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="background-container">

      {/*<header className="main-header">
        Javascript
      </header>*/}
      
      {/* Adicionamos uma classe no wrapper principal com base no estado.
        É isso que o CSS vai usar para animar!
      */}
      <div className={`login-wrapper ${isSignUp ? 'right-panel-active' : ''}`}>

        {/* --- NOVO: Painel de Sign Up (Cadastro) --- */}
        <div className="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FaGoogle /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
            <p>or use your email for registration</p>
            <div className="input-group">
              <span className="input-icon-wrapper">
                <FaUserPlus className="input-icon" />
              </span>
              <input type="text" placeholder="Name" />
            </div>
            <div className="input-group">
              <span className="input-icon-wrapper">
                <MdEmail className="input-icon" />
              </span>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-group">
              <span className="input-icon-wrapper">
                <MdLock className="input-icon" />
              </span>
              <input type="password" placeholder="Password" />
            </div>
            <button type="submit" className="sign-in-btn">Sign Up</button>
          </form>
        </div>

        {/* --- Painel de Sign In (Login) --- */}
        <div className="form-container sign-in-container">
          <form>
            <h1>Sign In To Developer</h1>
            <div className="social-icons">
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FaGoogle /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
            <p>or use your email account</p>
            <div className="input-group">
              <span className="input-icon-wrapper">
                <MdEmail className="input-icon" />
              </span>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-group">
              <span className="input-icon-wrapper">
                <MdLock className="input-icon" />
              </span>
              <input type="password" placeholder="Password" />
            </div>
            
            {/* Mensagem de erro que você queria */}
            <div className="error-message">
              <MdError />
              <span>Preencha este campo.</span>
            </div>
            
            <a href="#" className="forgot-password">Forgot your password?</a>
            <button type="submit" className="sign-in-btn">Sign In</button>
          </form>
        </div>

        {/* --- O OVERLAY (Painel Azul) --- */}
        <div className="overlay-container">
          <div className="overlay">
            
            {/* Painel do Overlay Esquerdo (que aparece no modo Sign Up) */}
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              {/* Este botão troca o estado para "Sign In" */}
              <button 
                className="overlay-btn" 
                onClick={() => setIsSignUp(false)}
              >
                Sign In
              </button>
            </div>

            {/* Painel do Overlay Direito (que aparece no modo Sign In) */}
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              {/* Este botão troca o estado para "Sign Up" */}
              <button 
                className="overlay-btn" 
                onClick={() => setIsSignUp(true)}
              >
                Sign Up
              </button>
            </div>
            
          </div>
        </div>

      </div> {/* Fim do login-wrapper */}
    </div> 
  );
}

export default App;