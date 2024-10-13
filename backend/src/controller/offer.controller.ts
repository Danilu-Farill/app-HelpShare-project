import { Request, Response } from "express";
import Offer from "../models/Offers.models";
import User from "../models/Users.models";
import { Op } from "sequelize";

export const createOffer = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, category } = req.body;
    const { id_user } = req.params; // Obtenemos id_user desde la URL

    const newOffer = await Offer.create({
      title,
      description,
      category,
      id_user,  // Usamos id_user de los parámetros
    });
    console.log(newOffer);
    
    res.status(201).json(newOffer);
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: 'Error al crear la oferta' });
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
      include: [
        {
          model: User,
          attributes: ["username"], // Solo devuelve el campo 'username' del usuario
        },
      ],
    });
    console.log(offers, "offers");   

    res.status(200).json(offers); 
  } catch (error) {
    console.error("Error al buscar ofertas:", error);
    res.status(500).json({ message: "Error al buscar ofertas" });
  }
};

// Obtener una oferta por ID 
export const getOfferById = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id_user } = req.params;
    const offer = await Offer.findAll({where:{id_user}});
    // if (!offer) {
    //   return res.status(404).json({ message: 'Offer not found' });
    // }
    res.status(200).json(offer);
  } catch (error) {
    console.error("Error fetching offer by ID:", error);
    res.status(500).json({ message: 'Error fetching controller offer by ID' });
  }
};
