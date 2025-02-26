import { where } from "sequelize"
// import Menu from "../models/MenuModels.js"
import Transaksi from "../models/TransaksiModels.js"
import Pembeli from "../models/PembeliModels.js"
import Cart from "../models/CartModels.js"
import Menu from "../models/MenuModels.js"
const includeCart = () => {
    return {
        include: [
            {
                model: Cart,
                as: 'Cart',
                required: true,
                include: [
                    {
                      model: Menu,
                      as: 'Menu',
                      required: true, // Menyertakan data Menu
                    },
                  ],
            },
            {
                model: Pembeli,
                as: 'Pembeli',
                required: true,
            },
         
        ]
    }
}
export const getAllTransaksi = async (req, res) => {
    try {
        const data = await Transaksi.findAll(includeCart())
        res.status(200).json({ msg: 'mengambil seluruh data', data: data })
    } catch (err) {
        res.status(500).json({ msg: err.msg })
    }

}

export const getAllTransaksiById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Transaksi.findByPk(id, includeCart())
        if(data){
            res.status(200).json({ msg: 'berhasil mengambil data admin', data: data })
        }else{
            res.status(200).json({ msg: 'data tidak ada', data: null })
        }
    } catch (err) {
        res.status(500).json({ msg: err.msg })
    }
    
}

export const createTransaksi = async (req, res) => {
    try {
        const { tanggal_pembelian, total_harga,status, CartId,PembeliId } = req.body;
        
        if (!tanggal_pembelian || !total_harga || !status || !CartId || !PembeliId) {
            return res.status(400).json({ message: 'Semua field harus diisi' });
        }

        const newCart = await Transaksi.create({ tanggal_pembelian, total_harga,status, CartId,PembeliId });
        res.status(201).json({ message: 'Cart berhasil ditambahkan', data: newCart });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Terjadi kesalahan', error: error.message });
    }

}
export const updateTransaksi = async (req, res) => {
    try {
        const {tanggal_pembelian, total_harga,status, CartId,PembeliId } = req.body
        const data = await Transaksi.update({tanggal_pembelian, total_harga,status, CartId,PembeliId }, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({ message: 'data berhasil di update' });
    } catch (err) {
        res.status(500).json({ message: 'Terjadi kesalahan', error: error.message });
    }

}

export const deleteTransaksi = async (req, res) => {
    try {
        const { id } = req.params;
        const cart = await Transaksi.findByPk(id);
        
        if (!cart) {
            return res.status(404).json({ message: 'Cart tidak ditemukan' });
        }
        
        await cart.destroy();
        res.status(200).json({ message: 'Cart berhasil dihapus' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Terjadi kesalahan', error: error.message });
    }

}

