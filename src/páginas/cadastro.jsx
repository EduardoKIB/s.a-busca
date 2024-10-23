import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); 
    navigate('/'); 
  };

  return (
    <>
      <div className="container">
        <div className="align">
          <h1 className='bigger'>Detalhes do Hóspede</h1>
          
          <form className="form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" placeholder='Nome' required/>
            </div>
            <div>
              <label htmlFor="phone">Telefone</label>
              <input type="tel" id="phone" placeholder='Telefone' required/>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder='Email' required/>
            </div>
            <div>
              <label htmlFor="country">País</label>
              <input type="text" id="country" placeholder='País' required/>
            </div>
            <div>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" placeholder='Senha' required/>
            </div>
            <button type="submit" className="register-button">Cadastrar</button>
          </form>
          
          <p>Já tem uma conta? <Link to='/login' className='link'>Entrar</Link></p>
        </div>
      </div>
    </>
  )
};

export default Cadastro
