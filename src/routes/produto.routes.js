import { Router } from "express";
import * as controller from '../controllers/produto.controller.js';

const produtoRoutes = Router();

produtoRoutes.get('listar', controller.listarProdutos)
produtoRoutes.get('cadastrar', controller.cadastrarProdutos)


export default produtoRoutes;