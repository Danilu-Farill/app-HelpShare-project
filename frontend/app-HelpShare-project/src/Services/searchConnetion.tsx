// export const searchConnection = async() => {
//     try {
//         console.log("Enviando solicitud de login...");
//      const response = await fetch(
//        "http://localhost:2000/api/offers/search?query=${query}",
//        {
//          method: "POST",
//          headers: {
//            "Content-Type": "application/json",
//          },
//          body: JSON.stringify({ email, password }),
//        }
//      );
//      console.log("Respuesta recibida:", response);
//      if (!response.ok) {
//         const errorData = await response.json();
//       throw new Error(errorData.message);
//      }
     
//      const data = await response.json();
//      console.log("Login exitoso", data);
//    } catch (error) {
//      console.error("Error durante el login", (error as Error).message);
//    }
// }