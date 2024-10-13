import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface Offer {
    id: number; // Ajusta según los campos de tu base de datos
    title: string;
    description: string;
  }
export const Search =  () => {

  const [query, setQuery] = useState<string>("");
  const [offers, setOffers] = useState<Offer[]>([]);
//   const [error, setError] = useState<string>('');

  const handleSearch = async () => {

    if (!query.trim()) {
        // setError("Por favor, ingresa un término de búsqueda.");
        return;
      }
  try{
    const response = await fetch(`http://localhost:2000/api/offers/search?query=${query}`);
    const data = await response.json();  
    console.log(data)
    if(response.ok){
        setOffers(data);
        // setError("");
    }else{
        setOffers([]);
        // setError(data.message || "Hubo un error al buscar ofertas");
    }
}catch (error) {
    console.error("Error", (error as Error).message);
    // setError("Error al conectar con el servidor.");
    setOffers([]); 
}
  }

  return (
    <div className="container-search">
      <div className="container-search-input">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar..."
          className="search"
        />
        <FontAwesomeIcon icon={faSearch} className="iconSearch" onClick={handleSearch}/>
      </div>
      {/* Mostrar resultados de las ofertas si existen */}
      {offers.length > 0 && (
        <div className="offers-list">
          <ul>
            {offers.map((offer, index) => (
              <li key={index}>
                <h3>{offer.title}</h3> {/* Muestra el título de la oferta */}
                <p>{offer.description}</p> {/* Muestra la descripción de la oferta */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    
  );
};
