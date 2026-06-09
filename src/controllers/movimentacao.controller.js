import sequelize from '../database/database.js';
import { Op } from 'sequelize';
import {Produto, Movimentacao}  from '../models/movimentacao.model.js';


export async function entradaProdutos(req, res) {
   try {
    const {id_produto, tipo, quantidade } = req.body;

    if (!id_produto || !tipo || !quantidade) {
        return res.status(400).json({erro: 'Dados incompletos!'})
    }

    
   } catch (error) {
    
   } 
}