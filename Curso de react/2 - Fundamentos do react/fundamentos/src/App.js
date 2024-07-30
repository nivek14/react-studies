// components
import FirstComponent from './components/FirstComponent';
import TemplateExpressionsExample from './components/TemplateExpressionsExample';
import Events from './components/Events';
import Challenge from './components/Challenge';

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>fundamentos</h1>
      <FirstComponent />
      <TemplateExpressionsExample />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
