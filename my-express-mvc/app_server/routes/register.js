// routes/registerRoutes.js
const express = require('express');
const router = express.Router();
const registrasiController = require('../controllers/controllerRegistrasi');

// Route untuk menyimpan data registrasi
router.post('/', registrasiController.insert);

module.exports = router;