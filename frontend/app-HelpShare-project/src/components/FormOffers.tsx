import { useState } from "react";
import { FormView } from "./FormView";
import { useOfferConnection } from "../Services/useOfferConnection"; // Importa el hook correctamente

export const FormOffers = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const idUser = 2; // Definir idUser directamente

  // Usamos el custom hook aquí
  const { offerConnection } = useOfferConnection();

  const handleOfferSubmit = async (): Promise<void> => {
    console.log("Datos enviados:", title, description, category);
    // Llamamos a la función offerConnection pasando el id_user y los datos de la oferta
    await offerConnection(idUser, { title, description, category });
  };
  
  return (
    <FormView
      title={title}
      description={description}
      category={category}
      setTitle={setTitle}
      setDescription={setDescription}
      setCategory={setCategory}
      onSubmitOffer={handleOfferSubmit} // Pasamos handleOfferSubmit a Formu
    />
  );
};
