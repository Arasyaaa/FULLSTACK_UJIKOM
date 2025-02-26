import { where } from "sequelize"
import Menu from "../models/MenuModels.js"
import Cart from "../models/CartModels.js"
const includeCart = () => {
    return {
        include: [
            {
                model: Menu,
                as: 'Menu',
                required: true,
            },
         
        ]
    }
}
export const getAllCart = async (req, res) => {
    try {
        const data = await Cart.findAll(includeCart())
        res.status(200).json({ msg: 'mengambil seluruh data', data: data })
    } catch (err) {
        res.status(500).json({ msg: err.msg })
    }

}

export const getAllCartById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Cart.findByPk(id, includeCart())
        if(data){
            res.status(200).json({ msg: 'berhasil mengambil data admin', data: data })
        }else{
            res.status(200).json({ msg: 'data tidak ada', data: null })
        }
    } catch (err) {
        res.status(500).json({ msg: err.msg })
    }
    
}

export const createCart = async (req, res) => {
    try {
        const { jumlah_barang, total_harga, MenuId } = req.body;
        
        if (!jumlah_barang || !total_harga || !MenuId) {
            return res.status(400).json({ message: 'Semua field harus diisi' });
        }

        const newCart = await Cart.create({ jumlah_barang, total_harga, MenuId });
        res.status(201).json({ message: 'Cart berhasil ditambahkan', data: newCart });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Terjadi kesalahan', error: error.message });
    }

}
export const updateCart = async (req, res) => {
    try {
        const { jumlah_barang, total_harga, MenuId } = req.body
        const data = await Cart.update({jumlah_barang, total_harga, MenuId }, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({ message: 'data berhasil di update' });
    } catch (err) {
        res.status(500).json({ message: 'Terjadi kesalahan', error: err.message });
    }

}

export const deleteCart = async (req, res) => {
    try {
        const { id } = req.params;
        const cart = await Cart.findByPk(id);
        
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

