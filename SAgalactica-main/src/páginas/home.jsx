import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
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
          <a href="/adm" className="btn-h">Administrador</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home