import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Pembeli from "./PembeliModels.js";
import Cart from "./CartModels.js";

const Transaksi = db.define(
    'Transaksi', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    tanggal_pembelian: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    total_harga: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },

},
    {
        tableName: 'transaksi'
    }
)

Pembeli.hasOne(Transaksi, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
})

Transaksi.belongsTo(Pembeli, {
    foreignKey: 'PembeliId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
})
Cart.hasOne(Transaksi, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
})

Transaksi.belongsTo(Cart, {
    foreignKey: 'CartId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
})



export default Transaksi