import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo_HelpShare.png";
import { DescriptionConnection } from "../Services/profileConnection";

// Definimos el tipo para los productos que se van a mostrar.
interface Product {
  id: number;
  name: string;
  description: string;
}

export const UserProfile = () => {
  const { username } = useParams<{ username: string }>(); // Obtener el nombre del usuario desde la URL.
  const savedDescription = localStorage.getItem("description");
  const savedUsername = localStorage.getItem("username");
  const [products, setProducts] = useState<Product[]>([]);
  const { offerConnection } = DescriptionConnection();

  useEffect(() => {
    const fetchData = async () => {
      const id_user = 1; // Cambia esto por el valor correcto o dinámico del usuario.
      const data = await offerConnection(id_user);

      if (data) {
        setProducts(data); // Guardamos los productos obtenidos en el estado.
      }
    };

    fetchData(); // Llamada a la API cuando el componente se monta.
  }, [offerConnection]);

  const isOwnProfile = savedUsername === username;

  return (
    <>
    <main>
      <article className="infoPage">
        <p>HELPSHARE</p>
        <img src={logo} className="logoProfile" alt="Logo HelpShare" />
        
        {/* Mostrar botones solo si el perfil es del usuario autenticado */}
        {isOwnProfile && (
          <>
            <button className="buttonOffer">
              <Link to="/search" className="linkStyle" style={{ textDecoration: 'none' }}>
                Buscar Ayuda
              </Link>
            </button>
            <button className="buttonSearch">
          <Link to={`/formOffer/${1}`} className="linkStyle" style={{ textDecoration: 'none' }}>
             Ofrecer ayuda
           </Link>
         </button>

          </>
        )}
      </article>

      <section className="dataUser">
        <div className="NameColor">{username}</div>
        <div className="iconUser"></div>
        <div className="description">{savedDescription}</div>

        {/* Mostrar productos solo si existen */}
        <div className="userProducts">
          <h3>Productos Ofrecidos:</h3>
          {products.length > 0 ? (
            <ul>
              {products.map((product) => (
                <li key={product.id}>
                  <strong>{product.name}</strong>: {product.description}
                </li>
              ))}
            </ul>
          ) : (
            <p>No se encontraron productos.</p>
          )}
        </div>
      </section>
    </main>
  </>
 );
};


// import { Link, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import logo from "../assets/logo_HelpShare.png";
// import { DescriptionConnection } from "../Services/profileConnection";

// interface Offer {
//   id: number;
//   title: string;
//   description: string;
//   category: string;
// }

// // Definimos el tipo para los productos que se van a mostrar.
// interface Product {
//   id: number;
//   name: string;
//   description: string;
// }

// export const UserProfile = () => {
//   const [offers, setOffers] = useState<Offer[]>([]);
//   const { username } = useParams<{ username: string }>(); // Obtener el nombre del usuario desde la URL.
//   const savedDescription = localStorage.getItem("description");
//   const [products, setProducts] = useState<Product[]>([]); // Estado para los productos.
//   const [id_user, setId_user] = useState<number>(1); // Aquí podrías usar el id correcto del usuario

//   // Instanciamos la función para obtener los productos.
//   const { offerConnection } = DescriptionConnection();

//   // Recuperar los productos cuando el componente se monta.
//   useEffect(() => {
//     const fetchData = async () => {
//       const id_user = 1; // Cambia esto por el valor correcto o dinámico del usuario.
//       const data = await offerConnection(id_user); // Recuperar los productos de la API.

//       if (data) {
//         setProducts(data); // Guardamos los productos obtenidos en el estado.
//       }
//     };

//     fetchData(); // Llamada a la API cuando el componente se monta.
//   }, [id_user, offerConnection]);

//   return (
//     <main>
//       <article className="infoPage">
//         <p>HELPSHARE</p>
//         <img src={logo} className="logoProfile" alt="Logo HelpShare" />
//         <button className="buttonOffer">
//           <Link to="/search" className="linkStyle" style={{ textDecoration: 'none' }}>
//             Buscar Ayuda
//           </Link>
//         </button>
//         <button className="buttonSearch">
//           <Link to={`/formOffer/${id_user}`} className="linkStyle" style={{ textDecoration: 'none' }}>
//             Ofrecer ayuda
//           </Link>
//         </button>
//       </article>

//       <section className="dataUser">
//         <div className="NameColor">{username}</div>
//         <div className="iconUser"></div>
//         <div className="description">{savedDescription}</div>

//         {/* Aquí mostramos los productos */}
//         <div>
//       <h3>Ofertas publicadas por el usuario</h3>
//       <ul>
//         {offers.length > 0 ? (
//           offers.map((offer) => (
//             <li key={offer.id}>
//               <strong>{offer.title}</strong> - {offer.description} (Categoría: {offer.category})
//             </li>
//           ))
//         ) : (
//           <li>No hay ofertas publicadas por este usuario</li>
//         )}
//       </ul>
//     </div>

//       </section>
//     </main>
//   );
// };
