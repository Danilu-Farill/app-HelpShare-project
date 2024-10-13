// import { dataRegister } from "../models/dataLogin";
import { useNavigate } from "react-router-dom";

export const useRegisterConnection = () => {
  const navigate = useNavigate();
  const registerConnection = async ({ email, password, username, description }: { email: string; password: string, username: string, description:string }) => {
    try {
      const response = await fetch("http://localhost:2000/api/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, username, description}),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      console.log("🚀 ~ registerConnection ~ data:", data)
      localStorage.setItem("username", data.username);
      localStorage.setItem("description", data.description);
      navigate(`/profile/${data.username} `);
    } catch (error) {
      console.error("Error durante el registro", (error as Error).message);
    }
  };

  return { registerConnection };
};
