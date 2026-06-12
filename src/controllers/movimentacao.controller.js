import sequelize from '../database/database.js';
import { Op } from 'sequelize';
import {Produto, Movimentacao}  from '../models/movimentacao.model.js';


export async function entradaProdutos(req, res) {
   try {
    const {id_produto, quantidade } = req.body;

    if (!id_produto || !quantidade) {
        return res.status(400).json({erro: 'Dados incompletos!'})
    }

    const produtoAlvo = await Produto.findByPk(id_produto)
    if (!produtoAlvo) {
        return res.status(400).json({erro: 'Produto não encontrado!'})
    }

    //registra a movimentacao
    const novaMovimentacao = await Movimentacao.create({
        id_produto,
        tipo: 'entrada',
        quantidade,
        data_movimentacao: new Date()
    })

    //incrementa a qtd de produtos da movimentação na qtd de produtos em estoque
    await produtoAlvo.increment('quantidade', { by: Number(quantidade) });

    produtoAlvo.reload() //atualiza a quantidade após a movimentacao

    const resposta = {
        mensagem: 'Entrada registrada com sucesso!',
        movimentacao: novaMovimentacao
    }

    //anexa um alerta na resposta caso a quantidade de produto atinja um limite
    if(produtoAlvo.quantidade >= 100){
        resposta.alerta = `Produto atingiu o limite máximo de estoque! Quantidade atual: ${produtoAlvo.quantidade}`;
    }


    return res.status(201).json(resposta);

   } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro interno do servidor' });
   } 
}