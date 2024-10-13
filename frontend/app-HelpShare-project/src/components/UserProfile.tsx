// import { Link, useParams } from "react-router-dom";
// import logo from "../assets/logo_HelpShare.png";
// import '../styles/profile.css';

// export const UserProfile = () => {
//     const {username} = useParams<{username:string}>()
//   return (
//     <main>
//       <article className="infoPage">
//         <p>HELPSHARE</p>
//         <img src={logo} className="logoProfile" />
//         <button className="buttonOffer">
//         <Link to="/search" className="linkStyle">
//             {" "}
//             Buscar Ayuda
//           </Link>
//         </button>
//         <button className="buttonSearch">
//         <Link to="/formOffer" className="linkStyle">
//             {" "}
//             Ofrecer ayuda
//           </Link>
//             </button>
//       </article>
//       <section className="dataUser">
//         <div className="NameColor">{username}</div>
//         <div className="iconUser"></div>
//         <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi numquam eius atque consequatur nam, facilis fuga natus beatae maxime ab at alias hic obcaecati nisi voluptatem mollitia tempora. Optio, culpa?</div>
//       </section>
//     </main>
//   );
// };







import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import logo from "../assets/logo_HelpShare.png";
import '../styles/profile.css';
import { ProductDonationsList, ServiceDonationsList } from './DonationsList';
import { Donation } from './DonationsList';

interface UserProfileProps {
  username?: string;
}
const initialDonations: Donation[] = [
  {
    "id": 1,
    "name": "Donativo 1",
    "description": "Descripción del donativo 1",
    "type": "product"
  },
  {
    "id": 2,
    "name": "Servicio de diseño gráfico",
    "description": "Descripción del servicio de diseño gráfico",
    "type": "service"
  },
  {
    "id": 3,
    "name": "Donativo de ropa",
    "description": "Descripción del donativo de ropa",
    "type": "product"
  },
  {
    "id": 4,
    "name": "Servicio de consultoría",
    "description": "Descripción del servicio de consultoría",
    "type": "service"
  },
  {
    "id": 5,
    "name": "Donativo de juguetes",
    "description": "Descripción del donativo de juguetes",
    "type": "product"
  }
];
export const UserProfile: React.FC<UserProfileProps> = () => {
  const { username } = useParams<{ username: string }>();
  const [donations, setDonations] = useState<Donation[]>(initialDonations);


  useEffect(() => {
    const fetchDonations = async () => {
      const response = await fetch(`/api/donations/${username}`);
      const data: Donation[] = await response.json();
      setDonations(data);
    };
    fetchDonations();
  }, [username]);

  return (
    <main>
      <article className="infoPage">
        <p>HELPSHARE</p>
        <img src={logo} className="logoProfile" />
        <button className="buttonOffer">
          <Link to="/search" className="linkStyle">
            {" "}
            Buscar Ayuda
          </Link>
        </button>
        <button className="buttonSearch">
          <Link to="/formOffer" className="linkStyle">
            {" "}
            Ofrecer ayuda
          </Link>
        </button>
      </article>
      <section className="dataUser">
        <div className="NameColor">{username}</div>
        <div className="iconUser"></div>
        <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi numquam eius atque consequatur nam, facilis fuga natus beatae maxime ab at alias hic obcaecati nisi voluptatem mollitia tempora. Optio, culpa?</div>
        <ul className='container_donation'>
          <li className='container_list_giveDonation'>
            <h2>Donativos de Productos</h2>
            <ProductDonationsList donations={donations} />
          </li>
          <li className='container_list_receiveDonation'>
            <h2>Donativos de Servicios</h2>
            <ServiceDonationsList donations={donations} />
          </li>
        </ul>
      </section>
    </main>
  );
};

