import sequelize from '../database/database.js';
import { Op } from 'sequelize';
import { Produto, Movimentacao } from '../models/movimentacao.model.js';


export async function entradaProdutos(req, res) {
    try {
        const { id_produto, quantidade } = req.body;

        if (!id_produto || !quantidade) {
            return res.status(400).json({ erro: 'Dados incompletos!' })
        }

        const produtoAlvo = await Produto.findByPk(id_produto)
        if (!produtoAlvo) {
            return res.status(400).json({ erro: 'Produto não encontrado!' })
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
        if (produtoAlvo.quantidade >= 100) {
            resposta.alerta = `Produto atingiu o limite máximo de estoque! Quantidade atual: ${produtoAlvo.quantidade}`;
        }


        return res.status(201).json(resposta);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: 'Erro interno do servidor' });
    }
}

export async function saidaProdutos(req, res) {
    try {
        const {id_produto, quantidade} = req.body;
        
        if(!id_produto || !quantidade){
            return res.status(400).json({erro: 'Dados incompletos'})
        }

        const produtoAlvo = await Produto.findByPk(id_produto)
        if(!produtoAlvo){
            return res.status(404).json({erro: 'Produto não encontrado!'})
        }

        //valida se ao retirar do esoqu a quantidade indicada, o estoque ficara menor que zero
        if(produtoAlvo.quantidade - Number(quantidade) < 0){
            return res.status(400).json({ erro: 'Quantidade insuficiente em estoque!'})
        }
        
        //cria movimentacao de saida
        const novaMovimentacao = await Movimentacao.create({
            id_produto,
            tipo: 'saida',
            quantidade,
            data_movimentacao: new Date()
        })
        
        //decrementa a qtd de produtos da movimentação na qtd de produtos em estoque
        await produtoAlvo.decrement('quantidade', { by: quantidade })
        await produtoAlvo.reload() //recarrega a nova quantidade de produtos apos movimentacao
        

        const resposta = {
            mensagem: 'Saída registrada com sucesso',
            movimentacao: novaMovimentacao
        }

        //anexa um alerta na resposta caso a quantidade de produto atinja um limite
        if(produtoAlvo.quantidade === 0){
            resposta.alerta = 'Produto atingiu o limite mínimo de estoque!'
        }
        
        return res.status(201).json(resposta)

    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: 'Erro interno do servidor' });
    }
}

<<<<<<< HEAD
export async function relatorioPorPeriodo(req, res){
    try {
        const {data_inicial, data_final} = req.body

        if(!data_inicial || !data_final){
            return res.status(400).json({ erro: 'Informe data_inicial e data_final!' });
        }

        const relatorio = await Movimentacao.findAll({
            attributes: [
                [sequelize.col('Produto.nome'), 'nome_produto'],
                [
                    sequelize.fn('SUM',
                        sequelize.literal(`CASE WHEN tipo='entrada' THEN quantidade ELSE 0 END`)
                    ),
                    'total_entradas'
                ],
                [
                    sequelize.fn('SUM', 
                        sequelize.literal(`CASE WHEN tipo='saida' THEN quantidade ELSE 0 AND`)
                    ),
                    'total_saidas'
                ],
                [
                    sequelize.literal(`
                        SUM(CASE WHEN tipo='entrada' THEN quantidade ELSE 0 END) -
                        SUM(CASE WHEN tipo = 'saida' THEN quantidade ELSE 0 END)
                    `),
                    'saldo_periodo'
                ]
            ]
        })

    


=======
export async function buscarSaidasPorData(req, res){
    try {
        const saidasPorData = await Movimentacao.findAll({
            where: {
                tipo: 'saida'
            }, 
            order: [['data_movimentacao', 'DESC']]
        })

        if(saidasPorData.length === 0){
            return res.status(404).json({ erro: 'Nenhuma movimentação de saída encontrada.' })
        }

        return res.status(200).json(saidasPorData)
>>>>>>> ab903fe1afd6e8fc2949fe600adc1f90af2f53c8
    } catch (error) {
        console.error(error);
        return res.status(500).json({ erro: 'Erro interno do servidor' });
    }
<<<<<<< HEAD
}
=======
}

>>>>>>> ab903fe1afd6e8fc2949fe600adc1f90af2f53c8
