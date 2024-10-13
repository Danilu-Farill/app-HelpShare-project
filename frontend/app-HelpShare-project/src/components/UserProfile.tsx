import { Link, useParams } from "react-router-dom";
import logo from "../assets/logo_HelpShare.png";
import '../styles/profile.css';

export const UserProfile = () => {
    const {username} = useParams<{username:string}>()
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
      </section>
    </main>
  );
};