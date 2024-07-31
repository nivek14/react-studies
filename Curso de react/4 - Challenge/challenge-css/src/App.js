import './App.css';
import CarsDetails from './components/CarsDetails';

function App() {

  const cars = [
    { id: 1, brand: "ferrari", color: "red", revised: true },
    { id: 2, brand: "lamb", color: "yellow", revised: true },
    { id: 3, brand: "fiat", color: "red", revised: false },
    { id: 4, brand: "ford", color: "blue", revised: true },
    { id: 5, brand: "renault", color: "black", revised: false },
    { id: 6, brand: "honda", color: "red", revised: false },
    { id: 7, brand: "toyota", color: "white", revised: false },
    { id: 8, brand: "chev", color: "red", revised: false },
    { id: 9, brand: "porche", color: "gray", revised: true }
  ]

  return (
    <div className="App">
      {cars.map((car) => (
        <CarsDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          revised={car.revised}
        />
      ))}
    </div>
  );
}

export default App;
