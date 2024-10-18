const express = require("express"); // Corrected the module name
const router = express.Router();
const mahasiswaController = require("../controllers/controllerMahasiswa");

// Fungsi dan Rute Index digunakan untuk memanggil semua data dalam database mongodb
router.get("/mahasiswa", mahasiswaController.Index);
module.exports = router;