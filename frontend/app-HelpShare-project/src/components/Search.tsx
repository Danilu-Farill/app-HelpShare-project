import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import React from "react"

// export const Search = () =>{
//     const [searchText, setSearchText] = React.useState('');
//     // useEffect(() => {
//     //     // nuestro código para traer información
//     // }, []);
//     return(
//         <>
//         <div className="container-search">
//             <div className='container-search-input'>
//                 <label htmlFor="search-form">
//                     <input type="text" name="search" placeholder="Search for..." className="search" value={searchText} /> 
//                         <FontAwesomeIcon icon={faSearch} className='iconSearch'/>
//                 </label>
//             </div>
//         </div>
//         <ul>
//             <li className="container-list">
//                 Productos: <span></span>
//             </li>
//         </ul>
//         <div>

//         </div>
//         </>
//     )
// }


import React, { useState, useEffect } from 'react';

interface Product {
    id: number;
    nombre: string;
}

const products: Product[] = [
  { id: 1, nombre: 'Producto 1' },
  { id: 2, nombre: 'Producto 2' },
  { id: 3, nombre: 'Producto 3' },
];

export const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const filterProducts = () => {
      const filteredProducts = products.filter((producto) =>
        producto.nombre.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredProducts(filteredProducts);
    };
    filterProducts();
  }, [searchText]);

  return (
    <div className="container-search">
      <div className="container-search-input">
        <input
          type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Buscar..." className="search"
        />
        <FontAwesomeIcon icon={faSearch} className="iconSearch" />
      </div>
      <ul className="container-list">
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.nombre}</li>
        ))}
      </ul>
    </div>
  );
};














//     return <>{error.message}</>;
// } else if (!isLoaded) {
//     return <>loading...</>;
// } else {
//     return (
//         <div className="wrapper">
//             <div className="search-wrapper">
//                 <label htmlFor="search-form">
//                     <input
//                         type="search" name="search-form"  id="search-form" className="search-input"   placeholder="Search for..."  value={q}
//                         onChange={(e) => setQ(e.target.value)}
//                     />
//                     <span className="sr-only">Search countries here</span>
//                 </label>
//             </div>
//             <ul className="card-grid">
//                 {items.map((item) => (
//                     <li>
//                         <article className="card" key={item.callingCodes}>
//                             <div className="card-image">
//                                 <img src={item.flag} alt={item.name} />
//                             </div>
//                             <div className="card-content">
//                                 <h2 className="card-name">{item.name}</h2>
//                                 <ol className="card-list">
//                                     <li>
//                                         population:{" "}
//                                         <span>{item.population}</span>
//                                     </li>
//                                     <li>
//                                         Region: <span>{item.region}</span>
//                                     </li>
//                                     <li>
//                                         Capital: <span>{item.capital}</span>
//                                     </li>
//                                 </ol>
//                             </div>
//                         </article>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
// }

// ReactDOM.render(<App />, document.getElementById("root"));