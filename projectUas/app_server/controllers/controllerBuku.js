const Buku = require("../models/buku");

const Index = async (req,res) => {
    try {
        const buku = await Buku.find({});
        res.status(200).json(buku);
        if(!buku){
            res.status(400).json({message: "Collection is Empty"})
        }
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users", error});
    }
};
const Show = async (req, res) => {
    try {
        const id = req.params.id;
        // Cari buku berdasarkan field 'id' yang ada di database
        const buku = await Buku.findOne({ id: id });
        // Jika buku tidak ditemukan
        if (!buku) {
            return res.status(404).json({ message: "Buku tidak ditemukan" });
        }
        // Mengirimkan data buku jika ditemukan
        res.status(200).json(buku);
    } catch (error) {
        // Menangani kesalahan jika ada masalah dengan database
        res.status(500).json({ message: "Terjadi kesalahan", error });
    }
};
module.exports = { Index, Show }