const knex = require("../config/knex");

exports.propiedades = (req, res) => {
  knex("propiedades")
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
