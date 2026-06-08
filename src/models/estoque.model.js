import sequelize from "../database/database.js";
import { DataTypes } from "sequelize";
import { Produto } from "./produto.model.js";

export const Estoque = sequelize.define('estoque',
    {
        id_estoque: {
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
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            validate: {
                min: 0,
                max: 100
            }
        }
    }, {
    tableName: 'estoque',
    timestamps: true
}
)

Produto.hasOne(Estoque, { foreignKey: 'id_produto' })

Estoque.belongsTo(Produto, { foreignKey: 'id_produto' })

export { Produto, Estoque }