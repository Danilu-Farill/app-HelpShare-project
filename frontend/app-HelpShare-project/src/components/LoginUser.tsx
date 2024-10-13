import { useState } from "react";
import { Login } from "./login";
import { useLoginConnection } from "../Services/loginConnection"; // Importa el hook correctamente

export const LoginUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Usamos el custom hook aquí
  const { loginConnection } = useLoginConnection();

  const handleLogin = async () => {
    console.log("Datos enviados:", email, password);
    // Llamamos a la función loginConnection pasando email y password
    await loginConnection({ email, password });
  };

  return (
    <Login
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      onLogin={handleLogin} // Pasamos handleLogin a Login como prop
    />
  );
};
