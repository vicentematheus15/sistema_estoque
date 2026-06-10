import sequelize from '../database/database.js';
import { Op } from 'sequelize';
import {Produto, Movimentacao}  from '../models/movimentacao.model.js';


export async function entradaProdutos(req, res) {
   try {
    const {id_produto, tipo, quantidade } = req.body;

    
    if (!id_produto || !tipo || !quantidade) {
        if(!tipo.toLowerCase() === 'entrada'){
            return res.status(400).json({erro: 'Tipo de movimentação incorreta!'})
        }
        return res.status(400).json({erro: 'Dados incompletos!'})
    }

    const produtoAlvo = await Produto.findByPk(id_produto)
    if (!produtoAlvo) {
        return res.status(400).json({erro: 'Produto não encontrado!'})
    }



   } catch (error) {
    
   } 
}