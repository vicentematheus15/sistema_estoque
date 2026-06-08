import 'dotenv/config';
import sequelize from './database/database.js';
import express from 'express';

import Produto from './src/models/produto.model.js'

const app = express()

app.use(express.json())

