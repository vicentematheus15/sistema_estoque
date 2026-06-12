import { Router } from "express";
import * as controller from '../controllers/movimentacao.controller.js';

const movimentacoesRoutes = Router();

movimentacoesRoutes.post('/entrada', controller.entradaProdutos)
movimentacoesRoutes.post('/saida', controller.saidaProdutos)



export default movimentacoesRoutes;