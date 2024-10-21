import React, { useState } from 'react';
import imgsuite from '../img/imgsuite.jpg'
import imgchale from '../img/chalé.jpg'
import close from '../img/closebutton.png'
import imgcabana from '../img/cabana.jpg'
import imgestacionamento from '../img/estacionamento.jpg'
import { Link } from 'react-router-dom';

export default function Busca() {
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [showForm, setShowForm] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Buscando hotéis em', destination);
    console.log('Datas:', checkInDate, 'a', checkOutDate);
    console.log('Número de hóspedes:', guests);
  };

  const handleSelect = () => {
    setShowForm(true);
  };
  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <div className="reserva-container">
      <div className="Align2">
        <h1 className="titulo-busca">Encontre o Quarto Perfeito para você</h1>

        <div className="quarto-box">
          <img src={imgsuite} alt="Imagem Exemplo" className="quarto-image" />
          <div className="quarto-text">
            <h3 className="quarto-title">Suite com cozinha</h3>
            
            <h3 className="quarto-subtitle">R$499  </h3> 
            <button className="select-button" onClick={handleSelect}>Selecionar</button>
          </div>
        </div>
        <br />
        <br />
        <div className="quarto-box">
          <img src={imgchale} alt="Imagem Exemplo" className="quarto-image" />
          <div className="quarto-text">
            <h3 className="quarto-title">Chalé Familia</h3>
            <h3 className="quarto-subtitle">R$590</h3>
            <button className="select-button" onClick={handleSelect}>Selecionar</button>
          </div>
        </div>
        <br />
        <br />
        <div className="quarto-box">
          <img src={imgcabana} alt="Imagem Exemplo" className="quarto-image" />
          <div className="quarto-text">
            <h3 className="quarto-title">Cabana</h3>
            <h3 className="quarto-subtitle">R$490</h3>
            <button className="select-button" onClick={handleSelect}>Selecionar</button>
          </div>
        </div>
        <br />
        <br />
        <div className="quarto-box">
          <img src={imgestacionamento} alt="Imagem Exemplo" className="quarto-image" />
          <div className="quarto-text">
            <h3 className="quarto-title">Estacionamento para Overlanders</h3>
            <h3 className="quarto-subtitle">R$100</h3>
            <button className="select-button" onClick={handleSelect}>Selecionar</button>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="Align1">
          <form onSubmit={handleSearch} className="busca-form">
            <div className="form-group">
            <button className="close-button" onClick={handleClose}>
                  

          </button>
              <label htmlFor="checkInDate">Data de Check-in:</label>
              <input
                type="date"
                id="checkInDate"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="checkOutDate">Data de Check-out:</label>
              <input
                type="date"
                id="checkOutDate"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="guests">Número de Hóspedes:</label>
              <input
                type="number"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                min="1"
              />
            </div>
            <div className="buttons-container-forBusca">
              <a href="/pagamento" className="btn-h">Pagamento</a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}