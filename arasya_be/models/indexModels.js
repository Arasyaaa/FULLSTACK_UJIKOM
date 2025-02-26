import db from "../utils/connection.js";
import Admin from "./AdminModels.js";
import Pembeli from "./PembeliModels.js";
import Menu from "./MenuModels.js";
import Cart from "./CartModels.js";
import Transaksi from "./TransaksiModels.js";

await db.sync({force:true})
