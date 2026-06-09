import {Produto, Movimentacao}  from '../models/movimentacao.model.js';
import sequelize from '../database/database.js';
import { Op } from 'sequelize'

export async function listarProdutos(req, res) {
    try {
        const todosProdutos = await Produto.findAll();
        return res.status(201).json(todosProdutos)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: 'Erro interno do servidor' });
    }
}

export async function cadastrarProdutos (req, res) {
    try {
        const {nome, categoria, quantidade, valor_unitario } = req.body;
        
        if (!nome || !categoria || !quantidade || !valor_unitario){
            return res.status(400).json({erro: 'Dados incompletos!'})
        }

        const novoProduto = await Produto.create({
            nome: nome,
            categoria: categoria,
            quantidade: quantidade,
            valor_unitario: valor_unitario
        });

        return res.status(201).json({
            nome: novoProduto.nome,
            categoria: novoProduto.categoria,
            quantidade: novoProduto.quantidade,
            valor_unitario: novoProduto.valor_unitario,
            createdAt: novoProduto.createdAt
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: 'Erro interno do servidor' });
    }
}