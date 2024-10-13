import { useState } from "react";
import { FormView } from "./FormView";
import { useOfferConnection } from "../Services/useOfferConnection"; 

export const FormOffers = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const idUser = 2; // Definir idUser directamente

  // Obtener el username del localStorage o de donde sea que se guarde
  const username = localStorage.getItem("username") || ("usuarioDesconocido");

  const { offerConnection } = useOfferConnection();

  const handleOfferSubmit = async (): Promise<void> => {  
    console.log("Datos enviados:", title, description, category);
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
      onSubmitOffer={handleOfferSubmit}
      username={username} // Pasamos el username aquí
    />
  );
};





