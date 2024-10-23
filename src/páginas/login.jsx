import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); 
    navigate('/'); 
  };

  return (
    <>
    <h1 className='bigger'>LOGIN</h1>
      <div className="container">
        <div className="align">
          
          
          <form className="form" onSubmit={handleSubmit}>            
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder='Email' required/>
            </div>
            
            <div>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" placeholder='Senha' required/>
            </div>
            <button type="submit" className="register-button">Login</button>
            <p>Não possui uma conta ? <Link to='/cadastro' className='link'>Criar conta</Link></p>
          </form>                    
        </div>
      </div>
    </>
  );
}

export default Login;


