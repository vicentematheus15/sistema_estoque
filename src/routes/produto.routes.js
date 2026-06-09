import { Router } from "express";
import * as controller from '../controllers/produto.controller.js';

const produtoRoutes = Router();

produtoRoutes.get('listar', controller.listarProdutos)


export default produtoRoutes;