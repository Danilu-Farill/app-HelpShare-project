import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
interface User {
    username: string;
  }
interface Offer {
  id: number;
  title: string;
  description: string;
  User: User;
}

export const Search = () => {
  const [query, setQuery] = useState<string>("");
  const [offers, setOffers] = useState<Offer[]>([]);

  const handleSearch = async () => {
    if (!query.trim()) {
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:2000/api/offers/search?query=${query}`
      );
      const data = await response.json();
      if (response.ok) {
        setOffers(data);
      } else {
        setOffers([]);
      }
    } catch (error) {
      console.error("Error", (error as Error).message);
      setOffers([]);
    }
  };

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
        <FontAwesomeIcon
          icon={faSearch}
          className="iconSearch"
          onClick={handleSearch}
        />
      </div>
      {offers.length > 0 && (
        <ul className="offers-list">
          {offers.map((offer, index) => (
            <li key={index} className="list">
              <h3>{offer.title}</h3> 
               <Link to={`/profile/${offer.User.username}`}>
                <h1>{offer.User.username}</h1>
              </Link>
              <p>{offer.description}</p> 
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
