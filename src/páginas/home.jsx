import React, { useState } from 'react';
import '../App.css';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');  // Estado para armazenar mensagem de erro

  // Função para abrir e fechar o modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setErrorMessage('');  // Limpar a mensagem de erro sempre que o modal for fechado
  };

  // Função para lidar com o envio do formulário de login
  const handleLogin = (event) => {
    event.preventDefault();
    // Verifica se o nome de usuário e a senha são "adm" e "adm123"
    if (adminUsername === 'adm' && adminPassword === 'adm123') {
      console.log('Login do Admin:', adminUsername, adminPassword);
      // Simula o redirecionamento após um login bem-sucedido
      window.location.href = '/Adm';  // Redireciona para a página de admin
    } else {
      setErrorMessage('Usuário ou senha inválidos!'); // Exibe mensagem de erro
    }
  };

  // Função para verificar se o botão "Entrar" pode ser habilitado
  const isFormValid = adminUsername && adminPassword;

  return (
    <>
      <div className="home-page">
        <div className="background-image"></div>
        <div className="content">
          <h1>Bem-vindo à Quinta do Ypuã!</h1>
          <p>Explore o que temos de oferecer e faça seu login ou registre uma nova conta!</p>
          <div className="buttons-container">
            <a href="/login" className="btn-h">Login</a>
            <a href="/cadastro" className="btn-h">Registrar</a>
            <button className="btn-h" onClick={toggleModal}>Administrador</button>
          </div>
        </div>
      </div>

      {/* Modal do Login do Administrador */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2>Login de Administrador</h2>
            <form onSubmit={handleLogin}>
              <div className="input-group">
                <label htmlFor="username">Usuário</label>
                <input
                  type="text"
                  id="username"
                  value={adminUsername}
                  onChange={(e) => setAdminUsername(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  required
                />
              </div>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <button
                type="submit"
                className="btn-h"
                disabled={!isFormValid} // Desabilita o botão se os campos estiverem vazios
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;