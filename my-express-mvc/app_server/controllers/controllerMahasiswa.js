const Mahasiswa = require("../models/mahasiswa");

// const Index = async (req, res) => {
//     try {
//         // Mencari data mahasiswa
//         const mahasiswas = await Mahasiswa.find({});
//          // Mengirimkan data mahasiswa jika ditemukan
//         res.status(200).json(mahasiswas);
//         // Jika tidak ada data mahasiswa ditemukan
//         if (!mahasiswas) {
//             res.status(400).json({ message: "Collection is empty" });
//         }
//     } catch (error) {
//         // Mengirimkan error jika ada masalah pada server
//         res.status(500).json({ message: "Error retrieving users", error });
//     }
// }

const index = (req, res, next) => {
    Mahasiswa.find({}, { __v: 0 })
      .then((mhs) => {
        const responseMessage = {
            code: 200,
            success: true,
            message: "Successfull",
            data: mhs
        };
        res.status(200).json(responseMessage);
      })
      .catch((e) => {
        const responseMessage = {
            code: 400,
            success: false,
            message: "Bad request"
        };
        res.status(400).json(responseMessage);
      });
};

//untuk menghandle request insert mahasiswa
const insert = (req, res, next) => {
    const mhs = new Mahasiswa({
      nama: req.body.nama,
      npm: req.body.npm,
      email: req.body.email,
      tanggal_lahir: req.body.tanggal_lahir,
      aktif: true
    });
  
    mhs
      .save()
      .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: result
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: true,
                message: "Bad request"
            };
            res.status(400).json(responseMessage);
        });
};

module.exports = {index,insert}