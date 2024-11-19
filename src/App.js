import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters.js';
function App() {
  const [characters, setCharacters] = useState(null);

  // Función para obtener los datos de la API
  const reqApi = async () => {
    try {
      const api = await fetch('https://rickandmortyapi.com/api/character');
      const characterApi = await api.json();
      setCharacters(characterApi.results);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
       
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          // Mostrar imagen y botón si no hay datos
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">
              Buscar Personaje
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;

