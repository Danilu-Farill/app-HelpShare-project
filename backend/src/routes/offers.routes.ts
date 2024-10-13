import express, { Router } from 'express';
import { createOffer, getOffers, updateOffer, deleteOffer, searchOffers, getOfferById } from '../controller/offer.controller';

const routerOffers: Router = express.Router();

routerOffers.post('/', createOffer);
routerOffers.get('/', getOffers);
routerOffers.get('/:id_user', getOfferById);
routerOffers.put('/:id', updateOffer);
routerOffers.delete('/:id', deleteOffer);
routerOffers.get('/search', searchOffers);

export { routerOffers};