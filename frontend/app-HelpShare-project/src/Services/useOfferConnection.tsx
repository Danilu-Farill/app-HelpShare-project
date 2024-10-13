import { OfferData } from "../models/dataLogin";

export const useOfferConnection = () => {
  const offerConnection = async (offerData: OfferData) => {
    try {
      const response = await fetch("http://localhost:2000/api/offers", {
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
      console.log("Oferta creada:", data);
      return data;
    } catch (error) {
      console.error("Error durante el login", (error as Error).message);
      alert(`Error: ${(error as Error).message}`);
    }
  };

  return { offerConnection };
};
