import sequelize from "../database/database.js";
import { DataTypes } from "sequelize";
import { Produto } from "./produto.model.js";

export const Movimentacao = sequelize.define('movimentacao',
    {
        id_movimentacao: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_produto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references: {
                model: Produto,
                key: 'id_produto'
            }
        },
        tipo: {
            type: DataTypes.ENUM('entrada', 'saida'),
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
        data_movimentacao: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    }, {
    tableName: 'movimentacao',
    timestamps: true
}
)

Produto.hasMany(Movimentacao, { foreignKey: 'id_produto' })

Movimentacao.belongsTo(Produto, { foreignKey: 'id_produto' })

export { Produto, Movimentacao }