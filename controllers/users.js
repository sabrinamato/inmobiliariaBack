const knex = require("../config/knexfile");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
    const salt = await bcrypt.genSaltSync()
    const password = await bcrypt.hashSync(req,body.password, salt);
    const newUser = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        password: password,
        permisos: req.body.permisos
    }
    knex("usuarios")
    .insert(newUser)
    .then(() => {
        res.status(200).json({ success: true, newUser: newUser })       
    })
    .catch((error) => {
        res.status(400).json({ error: message.error })
    })
};