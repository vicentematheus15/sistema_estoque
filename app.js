import 'dotenv/config';
import express from 'express';
import sequelize from './src/database/database.js';
import produtoRoutes from './src/routes/produto.routes.js';
import movimentacoesRoutes from './src/routes/movimentacoes.routes.js'

import './src/models/produto.model.js';
import './src/models/movimentacao.model.js';

const app = express();

app.use(express.json());

app.use('/produtos', produtoRoutes);
app.use('/movimentacoes', movimentacoesRoutes);

sequelize.sync({ alter: true }).then(() => {
    app.listen(process.env.API_PORT, () => 
        console.log(`Servidor rodando em http://localhost:${process.env.API_PORT}`)
    );
});
