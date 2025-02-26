import Menu from "../models/MenuModels.js"

export const getAllMenu = async (req, res) => {
    try {
        const data = await Menu.findAll()
        res.status(200).json({ msg: 'mengambil seluruh data', data: data })
    } catch (err) {
        res.status(500).json({ msg: err.msg })
    }

}

export const getAllMenuById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Menu.findByPk(id)
        if (data) {
            res.status(200).json({ msg: 'berhasil mengambil data ', data: data })
        } else {
            res.status(200).json({ msg: 'data tidak ada', data: null })
        }
    } catch (err) {
        res.status(500).json({ msg: err.msg })
    }

}
export const createMenu = async (req, res) => {
    try {
        const { nama, harga, deskripsi,gambar } = req.body;

        // Validasi input
        if (!nama || !harga, !deskripsi, !gambar) {
            return res.status(400).json({ message: 'pastikan mengisi semua data' });
        }

        // Buat Menu baru
        const newMenu = await Menu.create({ nama, harga, deskripsi, gambar });

        res.status(201).json({ message: 'Menu berhasil dibuat', data: newMenu });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Terjadi kesalahan', error: error.message });
    }

}
export const updateMenu = async (req, res) => {
    try {
        if (!req.body.nama || !req.body.harga || !req.body.deskripsi||!req.body.gambar ) {
            res.status(400).json({ msg: 'pastikan mengisi semua data' })
        } else {
            const { nama, harga, deskripsi,gambar } = req.body
            const data = await Menu.update({ nama, harga, deskripsi,gambar}, {
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({ message: 'Data berhasil diupdate' });
        }
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }

}


export const deleteMenu = async (req, res) => {
    try {
        const { id } = req.params;
        await Menu.destroy({
            where: {
                id: id,
            },
        });

        res.status(200).json({ message: 'Data berhasil di hapus' })

    } catch (error) {
        res.status(500).json({ message: 'Gagal menghapus data.', error });
    }
}
