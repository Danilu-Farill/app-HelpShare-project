import { Link } from "react-router-dom";
import logo from "../assets/logo_HelpShare.png";

interface FormLogin {
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  onLogin: () => void;
}


export const Login = ({
  email,
  password,
  setEmail,
  setPassword,
  onLogin, 
}: FormLogin) => {
  
  return (
    <>

      <section className="login">
        <img src={logo} className="imgLogo" />
        <section className="loginForm">
          <input
            className="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="password"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="buttonLogin" type="submit" onClick={onLogin}>
            Entrar
          </button>
        </section>
      </section>
      <section className="opcionsLogin">
        {/* <a>¿Olvidaste tu contraseña?</a> */}
        <p>
          ¿No tienes cuenta?
          <Link to="/register" className="linkStyle">
            {" "}
            Regístrate
          </Link>
        </p>
      </section>
    </>
  );
};
