import { dataLogin } from "../models/dataLogin";
// import { useNavigate } from "react-router-dom";

export const useLoginConnection = () => {
//   const navigate = useNavigate();

  const loginConnection = async({ email, password }: dataLogin) => {
    try {
        console.log("Enviando solicitud de login...");
      const response = await fetch(
        "http://localhost:2000/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      console.log("Respuesta recibida:", response);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      
      const data = await response.json();
      console.log("Login exitoso", data);
      
      localStorage.setItem("username", data.username);
    //   navigate(`/profile/${data.username}`); // Aquí usas navigate del hook
    } catch (error) {
      console.error("Error durante el login", (error as Error).message);
      alert(`Error: ${(error as Error).message}`);
    }
  };

  return { loginConnection };
};
