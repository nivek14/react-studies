import logo from './logo.svg';
import './App.css';

import Shibe from './assets/happy_shibe.gif';

import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserNames from './components/ShowUserNames';
import CarDetail from './components/CarDetail';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetail from './components/UserDetail';

function App() {

  const cars = [
    { id: 1, brand: "ferrari", color: "amarelo", newCar: true, km: 0 },
    { id: 2, brand: "ford", color: "preto", newCar: false, km: 0 },
    { id: 3, brand: "porche", color: "prata", newCar: true, km: 0 },
    { id: 4, brand: "fiat", color: "vermelho", newCar: true, km: 0 },
  ]

  const people = [
    { id: 1, nome: "test n1", idade: "test age1", profissao: "test prof1", habilitacao: true },
    { id: 2, nome: "test n2", idade: "test age2", profissao: "test prof2", habilitacao: false },
    { id: 3, nome: "test n3", idade: "test age3", profissao: "test prof3", habilitacao: true },
  ]

  function showMessage() {
    console.log("evento componente pai")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <h1>Seção 3</h1>

        <div>
          {/* imagem em public. Esta pasta é atrelada a src*/}
          <img src="/michael.jpg" alt="meme" />
        </div>

        <div>
          {/* imagem em src. Tem que importar no arquivo*/}
          <img src={Shibe} alt="meme" />
        </div>

        <ManageData />
        <ListRender />
        <ConditionalRender />
        <ShowUserNames name="test" />
        <CarDetail brand="ferrari" km={200} color="red" newCar={true} />
        <CarDetail brand="ford" km={100} color="blue" newCar={false} />

        {cars.map((car) => (
          <CarDetail
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
          />
        ))}

        <Fragments />

        <Container>
          <p>este é o conteúdo</p>
        </Container>

        <ExecuteFunction myFunction={showMessage} />

        <Message msg={message} />

        <ChangeMessageState handleMessage={handleMessage} />

        {people.map((person) => (
          <UserDetail
            key={person.id}
            nome={person.nome}
            idade={person.idade}
            profissao={person.profissao}
            habilitacao={person.habilitacao}
          />
        ))}

      </header>
    </div>
  );
}

export default App;
