import { dataLogin } from "../models/dataLogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLoginConnection = () => {
  const navigate = useNavigate();
const [errorMessage, setErrorMessage] = useState<string>("");
const [isAlertShown, setIsAlertShown] = useState<boolean>(false);

  const loginConnection = async({ email, password }: dataLogin) => {
    setErrorMessage("");
    setIsAlertShown(false);
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
        setErrorMessage(errorData.message);  // Guardamos el mensaje de error
        console.log(errorData.message) 
        if (!isAlertShown) {
            alert(errorData.message);
            console.log(errorData.message) ;
            setIsAlertShown(true);
          }
          return; 
      }
      
      const data = await response.json();
      console.log("Login exitoso", data);
      
      localStorage.setItem("username", data.username);
      localStorage.setItem("description",data.description)
      console.log(data.descripción)
      setIsAlertShown(false);
      navigate(`/profile/${data.username}`); // Aquí usas navigate del hook
    } catch (error) {
      console.error("Error durante el login", (error as Error).message);
    }
  };

  return { loginConnection, errorMessage};
};
