import './App.css';
import MyForms from './components/MyForms';

function App() {
  return (
    <div className="App">
      <MyForms user={{ name: "test name", email: "test@test.com" }} />
    </div>
  );
}

export default App;
