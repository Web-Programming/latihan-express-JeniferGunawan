const express = require("express");
const Housing = require('../models/housing'); 
const router = express.Router();

// Fungsi untuk mengambil semua data
const housingController = require("../controllers/controllerHousing");

router.get("/", housingController.Index);

router.get('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id); // Ambil ID dari parameter URL
        const housingData = await Housing.findOne({ id: id }); // Cari data berdasarkan ID
        if (housingData) {
            res.json(housingData); // Kembalikan data jika ditemukan
        } else {
            res.status(404).json({ message: 'Data not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data', error: error.message });
    }
});


module.exports = router;
