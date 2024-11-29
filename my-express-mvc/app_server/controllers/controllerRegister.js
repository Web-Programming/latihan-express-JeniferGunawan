const Register = require("../models/register");

const index = (req, res, next) => {
    Register.find({}, { __v: 0 })
      .then((register) => {
        const responseMessage = {
            code: 200,
            success: true,
            message: "Successfull",
            data: register
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

const insert = (req, res, next) => {
    const register = new  Register({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
    });
  
    register
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

module.exports = {index, insert}