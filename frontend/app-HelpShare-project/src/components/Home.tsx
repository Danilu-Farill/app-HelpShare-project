import { Link } from "react-router-dom";
import logo from "../assets/logo-home.png";
export const Home = () => {
  return (
    <>
      <section className="backgroundHome">
        <img src={logo} className="logoHome" />
        <div className="descriptionApp"> Ofrece y recibe ayuda de forma voluntaria. Con nuestra app, puedes ofrecer tus conocimientos y habilidades para apoyar a otros, o encontrar ayuda en áreas como educación, salud y más, todo sin ningún intercambio monetario. ¡Únete a nuestra comunidad y marca la diferencia!</div>
        <button className="iniciar">
          <Link to="/login" className="linkStyle">
            Iniciar
          </Link>
        </button>
      </section>
    </>
  );
};
