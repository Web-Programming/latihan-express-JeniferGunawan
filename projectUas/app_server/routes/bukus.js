const express = require("express");
const router = express.Router();
const bukuController = require("../controllers/controllerBuku");
// Fungsi dan Rute Index Kita Gunakan Untuk Memanggil Semua Data Dalam Database MongoDB
router.get("/", bukuController.Index);
router.get("/:id", bukuController.Show);

module.exports = router;