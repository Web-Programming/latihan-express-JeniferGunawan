const express = require("express");
const Housing = require('../models/housing'); 
const router = express.Router();

// Fungsi untuk mengambil semua data
const housingController = require("../controllers/controllerHousing");

router.get("/", housingController.Index);
router.get('/:id',  housingController.tambah) 


module.exports = router;
