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
        return data; // Aquí se devolverían las ofertas del usuario.
      } catch (error) {
        console.error("Error al obtener las ofertas", (error as Error).message);
      }
    };
  
    return { offerConnection };
  };