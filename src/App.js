import React, { useState } from 'react';

function App() {
  const [calle, setCalle] = useState('');
  const [callesSugeridas, setCallesSugeridas] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (calle.trim() !== '') {
      try {
        const url = `http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${encodeURIComponent(calle)}`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.direccionesNormalizadas) {
          setCallesSugeridas(data.direccionesNormalizadas);
        } else {
          setCallesSugeridas([]);
        }
      } catch (error) {
        console.error('Error al obtener las calles sugeridas:', error);
        setCallesSugeridas([]);
      }
    }
  };

  return (
    <div className="App">
      <h1>Calles Sugeridas</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="calle">Ingrese una calle/dirección:</label>
        <input
          type="text"
          id="calle"
          value={calle}
          onChange={(e) => setCalle(e.target.value)}
          required
        />
        <button type="submit">Buscar</button>
      </form>
      <div id="resultado">
        {callesSugeridas.length > 0 ? (
          <ul>
            {callesSugeridas.map((calle, index) => (
              <li key={index}>{calle.direccion}</li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron calles sugeridas para la búsqueda.</p>
        )}
      </div>
    </div>
  );
}

export default App;
