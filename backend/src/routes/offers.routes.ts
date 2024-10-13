import express, { Router } from 'express';
import { createOffer, getOffers, updateOffer, deleteOffer, searchOffers } from '../controller/offer.controller';

const routerOffers: Router = express.Router();

routerOffers.post('/', createOffer);
routerOffers.get('/', getOffers);
routerOffers.put('/:id', updateOffer);
routerOffers.delete('/:id', deleteOffer);
routerOffers.get('/search', searchOffers);

export { routerOffers};