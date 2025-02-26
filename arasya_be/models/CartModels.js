import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Menu from "./MenuModels.js";

const Cart = db.define(
    'Cart', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    jumlah_barang: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total_harga: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
    {
        tableName: 'cart'
    }
)
Menu.hasOne(Cart, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
})

Cart.belongsTo(Menu, {
    foreignKey: 'MenuId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
})



export default Cart