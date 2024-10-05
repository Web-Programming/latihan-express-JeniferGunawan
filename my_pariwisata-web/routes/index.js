var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Beranda' });
});

// router.get('/paketwisata', function(req, res, next) {
//   res.render('paketwisata', { title: 'Paket Wisata' });
// });

router.get('/paketwisata', function(req, res, next) {
  let listpaketwisata = [
    {'nama' : 'Eksplorasi Alam Bandung', 'harga' : 2700000},
    {'nama' : 'Heritage Bandung', 'harga' : 2500000},
    {'nama' : 'Petualangan Lembang', 'harga' : 4500000},
    {'nama' : 'Kuliner Bandung', 'harga' : 4000000},
    {'nama' : 'Wisata Keluarga Bandung', 'harga' : 3000000},
    {'nama' : 'Bandung Adventure', 'harga' : 3500000},
  ];
  res.render('paketwisata', {
    title: 'Paket Wisata Bandung', 
    listpaketwisata: listpaketwisata
  });
});

router.get('/orderpaket', function(req, res, next) {
  res.render('orderpaket', { title: 'Form Pemesanan Paket' });
});

router.post('/orderdetail', function(req, res, next) {
  const { nama, email, selectPaketWisata, jumlah, hargaTotal } = req.body;
  res.render('orderdetail', { 
    title: 'Detail Pemesanan Paket', 
    orderDetails: { nama, email, selectPaketWisata, jumlah, hargaTotal } 
  });
});

module.exports = router;
