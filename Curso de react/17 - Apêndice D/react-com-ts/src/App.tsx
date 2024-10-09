import './App.css';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import State from './components/State';
import { Category } from './components/SecondComponent';
import { createContext } from 'react';
import Context from './components/Context';

type textOrNull = string | null;

interface IAppContext {
  language: string,
  framework: string
}
export const AppContext = createContext<IAppContext | null>(null);

function App() {

  const text: string = "test";
  const n: number = 10;
  const isActive: boolean = true;

  const userGreeting = (text: string): string => {
    return `Ola, ${text}`;
  }

  // criando tipos de variáveis
  const textEx: textOrNull = "tem texto";
  let textExTwo: textOrNull = null;

  const contextValue = {
    language: "java",
    framework: "spring"
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>React com typescript</h1>
        <p>{text}</p>
        <p>{n}</p>
        {isActive && (
          <p>está ativo</p>
        )}
        {!isActive && (
          <p>não está ativo</p>
        )}
        <p>{userGreeting(text)}</p>
        <FirstComponent />
        <SecondComponent text={text} number={n} isActive={isActive} category={Category.TS} />
        <State />
        {!textExTwo &&
          <p>não tem texto</p>
        }
        {textEx &&
          <p>tem texto</p>
        }
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
