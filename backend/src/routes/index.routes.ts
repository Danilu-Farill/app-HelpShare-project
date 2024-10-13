import express, { Application, Router} from "express";
import { routerUsers } from "./users.routes";
import { routerOffers } from './offers.routes';

function router(app:Application): void {
    const routes: Router = express.Router();
    app.use('/api/', routes);
    routes.use('/users', routerUsers);
    routes.use('/offers', routerOffers);
};

export {router};