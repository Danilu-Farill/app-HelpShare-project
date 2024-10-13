import express, { Application, Request, Response } from "express";
import { router } from "./routes/index.routes";
import dotenv from "dotenv";
import {testConnection} from './connection';
import { sequelize } from "./config/sequelize";
import './models/association.models';
import cors from 'cors';



dotenv.config();

const app: Application = express();
app.use(express.json());
const port: number = parseInt(process.env.PORT ||"2001", 10);//10 es la base numérica
app.use(cors());
app.get("/", (req: Request, res: Response): void => {
  res.send('HelpShare');
});

router(app);

const startServer = async () => {
    try {
      await testConnection();
      console.log('Database connected');

      await sequelize.sync();
      console.log('Database synchronized successfully!');

      app.listen(port, () => {
        console.log(`Server running on port ${port}`);
      });
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
};
  
startServer();

