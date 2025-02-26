import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Pembeli = db.define(
    'Pembeli', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },

},
    {
        tableName: 'pembeli'
    }
)



export default Pembeli