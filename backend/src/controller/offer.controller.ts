import { Request, Response } from "express";
import Offer from "../models/Offers.models";
import User from "../models/Users.models";
import { Op } from "sequelize";

// Crear una nueva oferta
export const createOffer = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, description, category, id_user } = req.body;

    // Validar que el usuario existe
    const user = await User.findByPk(id_user);
    if (!user) {
      res.status(404).json({ message: "Usuario no encontrado" });
      return;
    }

    const newOffer = await Offer.create({
      title,
      description,
      category,
      id_user, // Asociar la oferta al usuario que la creó
    });
    // console.log("🚀 ~ newOffer:", newOffer)

    res.status(200).json(newOffer);
  } catch (error) {
    console.error("Error al crear la oferta:", error);
    res.status(500).json({ message: "Error al crear la oferta" });
  }
};

// Obtener todas las ofertas
export const getOffers = async (req: Request, res: Response): Promise<void> => {
  try {
    const offers = await Offer.findAll({
      include: [
        {
          model: User,
          attributes: ["username"], // Solo devuelve el campo 'username' del usuario
        },
      ],
    });
    //   console.log("Offers",offers);
    res.status(200).json(offers);
  } catch (error) {
    console.error("Error al obtener ofertas:", error);
    res.status(500).json({ message: "Error al obtener ofertas" });
  }
};

// Actualizar una oferta
export const updateOffer = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, description, category } = req.body;

    const offer = await Offer.findByPk(id);
    if (!offer) {
      res.status(404).json({ message: "Oferta no encontrada" });
      return;
    }

    // Actualizar la oferta con los nuevos valores
    await offer.update({
      title,
      description,
      category,
    });

    res.status(200).json(offer);
  } catch (error) {
    console.error("Error al actualizar la oferta:", error);
    res.status(500).json({ message: "Error al actualizar la oferta" });
  }
};

// Eliminar una oferta (DELETE)
export const deleteOffer = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const offer = await Offer.findByPk(id);
    if (!offer) {
      res.status(404).json({ message: "Oferta no encontrada" });
      return;
    }

    await offer.destroy();
    res.status(200).json({ message: "Oferta eliminada exitosamente" });
  } catch (error) {
    console.error("Error al eliminar la oferta:", error);
    res.status(500).json({ message: "Error al eliminar la oferta" });
  }
};

export const searchOffers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { query } = req.query; // Obtenemos la palabra clave de la query string 

    if (!query) {
      res.status(400).json({ message: "Falta el parámetro de consulta" });
      return;
    }

    // Realizamos la búsqueda en el título de las ofertas
    const offers = await Offer.findAll({
      where: {
        title: {
          [Op.like]: `%${query}%`, // Buscamos las ofertas cuyo título contenga la palabra clave
        },
      },
    });

    res.status(200).json(offers); 
  } catch (error) {
    console.error("Error al buscar ofertas:", error);
    res.status(500).json({ message: "Error al buscar ofertas" });
  }
};
