var express = require('express');
var router = express.Router();

// Rute untuk halaman utama
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Rute untuk halaman about
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us' });
});

// Rute untuk halaman contact
router.get('/contact', function(req, res, next) { // Perbaiki kesalahan sintaksis
  res.render('contact'); // Pastikan file contact.ejs ada di folder views
});

// Rute untuk menangani pengiriman formulir contact
router.post('/submit-contact', function(req, res, next) {
  const name = req.body.name;
  res.render('submit-contact', { name: name }); // Pastikan file submit-contact.ejs ada di folder views
});

// Rute tambahan untuk send-message jika diperlukan
router.post('/send-message', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  res.send('Your message has been sent successfully!');
});

module.exports = router;