import { OfferData } from "../models/dataLogin";
export const useOfferConnection = () => {
  const offerConnection = async (id_user: number, offerData: Omit<OfferData, 'id_user'>) => {
    try {
      const response = await fetch(`http://localhost:2000/api/offers/${id_user}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(offerData),
      });
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const data = await response.json();
      // const local = localStorage.setItem("data", data);
      // console.log("🚀 ~ offerConnection ~ local:", local, )
      console.log("Oferta creada:", data);
      return data;
    } catch (error) {
      console.error("Error durante el login", (error as Error).message);
    }
  };
  return { offerConnection };
};