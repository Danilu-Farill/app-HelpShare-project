import { Link, useParams } from "react-router-dom";
import logo from "../assets/logo_HelpShare.png";

export const UserProfile = () => {
    const {username} = useParams<{username:string}>()
    const savedDescription = localStorage.getItem("description");
  return (
    <main>
      <article className="infoPage">
        <p>HELPSHARE</p>
        <img src={logo} className="logoProfile" />
        <button className="buttonOffer">
        <Link to="/search" className="linkStyle" style={{ textDecoration: 'none' }}>
            {" "}
            Buscar Ayuda
          </Link>
        </button>
        <button className="buttonSearch">
        <Link to="/formOffer" className="linkStyle" style={{ textDecoration: 'none' }}>
            {" "}
            Ofrecer ayuda
          </Link>
            </button>
      </article>
      <section className="dataUser">
        <div className="NameColor">{username}</div>
        <div className="iconUser"></div>
        <div className="description">{savedDescription}</div>
      </section>
    </main>
  );
};

