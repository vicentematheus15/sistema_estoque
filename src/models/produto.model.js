import sequelize from "../database/database.js";
import { DataTypes } from "sequelize";

export const Produto = sequelize.define('Produto',
    {
        id_produto: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        categoria: {
            type: DataTypes.ENUM('Produtos Quimicos', 'Ferramentas e Acessorios', 'Equipamentos de Protecao'),
            allowNull: false,
        },
        valor_unitario: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    }, {
        tableName: 'produtos',
        timestamps: true
    }
)

export default Produto
