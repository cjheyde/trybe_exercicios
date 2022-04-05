import './App.css';
import Pokedex from './components/Pokedex';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <div className="App">
      <Pokemon />
      <Pokedex />
    </div>
  );
}

export default App;
