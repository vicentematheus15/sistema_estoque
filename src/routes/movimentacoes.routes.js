import { Router } from "express";
import * as controller from '../controllers/movimentacao.controller.js';
import {Produto, Movimentacao}  from '../models/movimentacao.model.js';

const movimentacoesRoutes = Router();

movimentacoesRoutes.put('entrada', controller.entradaProdutos)


export default movimentacoesRoutes;