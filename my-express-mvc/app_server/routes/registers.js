const express = require("express"); // Corrected the module name
const router = express.Router();
const registerController = require("../controllers/controllerRegister");

// Fungsi dan Rute Index digunakan untuk memanggil semua data dalam database mongodb
router.get("/", registerController.index);
router.post("/tambah", registerController.insert);
module.exports = router;