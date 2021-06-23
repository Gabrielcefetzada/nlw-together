import express from "express";
import './database'
import { router } from "./routes";

const app = express();

app.use(express.json()) // falando para o express que estou usando json para mandar dados

app.use(router) // inserindo rotas no projeto

app.listen(3000, () => console.log("server is running"))