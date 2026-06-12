import { Router } from "express";
import * as controller from '../controllers/produto.controller.js';

const produtoRoutes = Router();

produtoRoutes.get('/listar', controller.listarProdutos);
produtoRoutes.post('/cadastrar', controller.cadastrarProdutos);
produtoRoutes.get('/valorCategorias', controller.valorTotalCategorias)

export default produtoRoutes;