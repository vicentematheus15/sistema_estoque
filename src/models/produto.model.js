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
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            validate: {
                min: 0,
                max: 100
            }
        },
        valor_unitario: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                min: 0.01
            }
        }
    }, {
    tableName: 'produtos',
    timestamps: true
}
)

export default Produto
