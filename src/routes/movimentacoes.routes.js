import { Router } from "express";
import * as controller from '../controllers/movimentacao.controller.js';

const movimentacoesRoutes = Router();

movimentacoesRoutes.put('entrada', controller.entradaProdutos)


export default movimentacoesRoutes;