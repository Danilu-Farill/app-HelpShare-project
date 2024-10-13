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
  const [products, setProducts] = useState<Product[]>([]); // Estado para los productos.
  const [id_user, setId_user] = useState<number>(1); // Declaración de id_user

  // Instanciamos la función para obtener los productos.
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

  return (
    <main>
      <article className="infoPage">
        <p>HELPSHARE</p>
        <img src={logo} className="logoProfile" alt="Logo HelpShare" />
        <button className="buttonOffer">
          <Link to="/search" className="linkStyle" style={{ textDecoration: 'none' }}>
            Buscar Ayuda
          </Link>
        </button>
        <button className="buttonSearch">
          <Link to={`/formOffer/${id_user}`} className="linkStyle" style={{ textDecoration: 'none' }}>
            Ofrecer ayuda
          </Link>
        </button>
      </article>
      <section className="dataUser">
        <div className="NameColor">{username}</div>
        <div className="iconUser"></div>
        <div className="description">{savedDescription}</div>

        {/* Aquí mostramos los productos */}
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
  );
};
