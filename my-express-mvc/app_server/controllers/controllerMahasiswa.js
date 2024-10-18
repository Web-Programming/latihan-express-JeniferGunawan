const Mahasiswa = require("../models/mahasiswa");

exports.Index = async (req, res) => {
    try {
        // Mencari data mahasiswa
        const mahasiswas = await Mahasiswa.find({});
         // Mengirimkan data mahasiswa jika ditemukan
        res.status(200).json(mahasiswas);
        // Jika tidak ada data mahasiswa ditemukan
        if (!mahasiswas) {
            res.status(400).json({ message: "Collection is empty" });
        }
    } catch (error) {
        // Mengirimkan error jika ada masalah pada server
        res.status(500).json({ message: "Error retrieving users", error });
    }
}