import { Link } from "react-router-dom";
import logo from "../assets/logo_HelpShare.png";
export const Login = () => {
  return (
    <>
    
        
   
    <section className="login">
      <img src={logo} className="imgLogo" />
      <section className="loginForm">
        <input
          className="username"
          type="text"
          placeholder="Nombre"
          //   value={}
          //   onChange={}
        />
        <input
          className="password"
          type="password"
          placeholder="Contraseña"
          //   value={}
          //   onChange={}
        />
        <button className="buttonLogin" type="submit" /*onClick={}*/>
          Entrar
        </button>
      </section>
      
    </section>
    <section className="opcionsLogin">
        {/* <a>¿Olvidaste tu contraseña?</a> */}
        <p>
          ¿No tienes cuenta? 
          <Link to="/register" className="linkStyle"> Regístrate</Link>
        </p>
      </section>
      </>
  );
};
