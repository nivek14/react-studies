import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {

  const [n] = useState(9);
  const redTitle = true;

  return (
    <div className="App">
      <h1>React com css</h1>
      <MyComponent />
      <p>paragrafo do pai</p>
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>estilização com inline</p>
      <p style={n < 10 ? ({ color: "purple" }) : ({ color: "pink" })}>estilização inline dinâmica</p>
      <p className={redTitle ? "red-title" : "title"}>paragrafo com classe dinâmica</p>
      <Title />
    </div>
  );

}

export default App;
