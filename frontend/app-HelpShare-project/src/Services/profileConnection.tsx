export const DescriptionConnection = () => {
    const offerConnection = async (id_user: number) => {
      try {
        const response = await fetch(`http://localhost:2000/api/offers/profile/${id_user}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }
  
        const data = await response.json();
        return data; // Asegúrate de devolver los datos.
      } catch (error) {
        console.error("Error durante la obtención de productos:", (error as Error).message);
        return null; // Devuelve null en caso de error para manejarlo en el componente.
      }
    };
  
    return { offerConnection };
  };
  