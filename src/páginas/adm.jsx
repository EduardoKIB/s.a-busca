import React, { useState } from 'react';
import '../App.css';

function Adm() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchByDate, setSearchByDate] = useState({
    dataEntrada: '',
    dataSaida: '',
    quarto: ''
  });

  const [formData, setFormData] = useState({
    id: '',
    nome: '',
    gmail: '',
    telefone: '',
    dataEntrada: '',
    dataSaida: '',
    quarto: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAddUser = () => {
    if (formData.nome && formData.gmail && formData.telefone && formData.dataEntrada && formData.dataSaida && formData.quarto) {
      setUsers([...users, { ...formData, id: users.length + 1 }]);
      setFormData({
        id: '',
        nome: '',
        gmail: '',
        telefone: '',
        dataEntrada: '',
        dataSaida: '',
        quarto: ''
      });
    }
  };

  const handleEditUser = (id) => {
    const user = users.find((user) => user.id === id);
    if (user) {
      setFormData(user);
    }
  };

  const handleUpdateUser = () => {
    setUsers(users.map((user) => (user.id === formData.id ? formData : user)));
    setFormData({
      id: '',
      nome: '',
      gmail: '',
      telefone: '',
      dataEntrada: '',
      dataSaida: '',
      quarto: ''
    });
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleSearchUser = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSearchByDate = (e) => {
    setSearchByDate({
      ...searchByDate,
      [e.target.name]: e.target.value
    });
  };

  const filteredUsers = users.filter((user) =>
    (user.id.toString().includes(searchTerm) || user.nome.toLowerCase().includes(searchTerm)) &&
    (!searchByDate.dataEntrada || user.dataEntrada === searchByDate.dataEntrada) &&
    (!searchByDate.dataSaida || user.dataSaida === searchByDate.dataSaida) &&
    (!searchByDate.quarto || user.quarto === searchByDate.quarto)
  );

  return (
    <div className="App">
      <h1>Administração de Usuários do Hotel</h1>
      <div className="ADMaling">
        <fieldset className='fieldset'>
          <h2>Cadastro de Cliente</h2>
          <div>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
            />
            <input
              type="text"
              name="gmail"
              placeholder="Gmail"
              value={formData.gmail}
              onChange={handleChange}
            />
            <input
              type="text"
              name="telefone"
              placeholder="Telefone"
              value={formData.telefone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="quarto"
              placeholder="Número do Quarto"
              value={formData.quarto}
              onChange={handleChange}
            />
            <input
              type="date"
              name="dataEntrada"
              value={formData.dataEntrada}
              onChange={handleChange}
            />
            <input
              type="date"
              name="dataSaida"
              value={formData.dataSaida}
              onChange={handleChange}
            />

            <button onClick={formData.id ? handleUpdateUser : handleAddUser}>
              {formData.id ? 'Atualizar' : 'Adicionar'}
            </button>
          </div>
        </fieldset>
        <fieldset className='fieldset2'>
          <h2>Lista de Usuários</h2>
          <h3>barras de buscas:</h3>
            <input
              type="text"
              placeholder="Buscar por ID ou Nome"
              value={searchTerm}
              onChange={handleSearchUser}
            />

            <input
              type="date"
              name="dataEntrada"
              placeholder="Data de Entrada"
              value={searchByDate.dataEntrada}
              onChange={handleSearchByDate}
            />

            <input
              type="date"
              name="dataSaida"
              placeholder="Data de Saída"
              value={searchByDate.dataSaida}
              onChange={handleSearchByDate}
            />

            <input
              type="text"
              name="quarto"
              placeholder="Buscar por Quarto"
              value={searchByDate.quarto}
              onChange={handleSearchByDate}
            />

          <div className='alingTabela'>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Gmail</th>
                <th>Telefone</th>
                <th>Data de Entrada</th>
                <th>Data de Saída</th>
                <th>Quarto</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.nome}</td>
                  <td>{user.gmail}</td>
                  <td>{user.telefone}</td>
                  <td>{user.dataEntrada}</td>
                  <td>{user.dataSaida}</td>
                  <td>{user.quarto}</td>
                  <td>
                    <button onClick={() => handleEditUser(user.id)}>Editar</button>
                    <button onClick={() => handleDeleteUser(user.id)}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </fieldset>
      </div>
    </div>
  );
}

export default Adm;