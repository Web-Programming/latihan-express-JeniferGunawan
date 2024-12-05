const mongoose = require("mongoose");

const bukuSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    judul: {
        type: String,
        required: true
    },
    penulis: {
        type: String,
        required: true
    },
    kategori: {
        type: String,
        required: true
    },
    tahunTerbit: {
        type: Number,
        required: true
    },
    isbn: {
        type: String,
        unique: true,
        required: true
    },
    deskripsi: {
        type: String,
        required: true
    },
    gambarSampul: {
        type: String,
        required: true
    },
    formatDigital: {
        type: Boolean,
        required: true
    },
    tag: {
        type: [String],
        required: false
    }
});

const Buku = mongoose.model('Buku', bukuSchema);
module.exports = Buku;
