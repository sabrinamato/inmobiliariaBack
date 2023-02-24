const knex = require("../config/knex");

exports.propiedades = (req, res) => {
  knex(Inmobiliaria)
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};
exports.searchById = (req, res) => {
  knex(Inmobiliaria)
  // .select()
  .from("propiedades")
  .where("id", req.params.id)
  .then((result) => {
      res.json(result)
  })
  .catch((error) => {
      res.status(400).json({ error: error.message })
  })
};



exports.addPublicacion = (req, res) => {
  const propiedades = req.body
  knex("propiedades")
  .insert({
      id: propiedades.id,
          operacion: propiedades.operacion,
          tipoInmueble:propiedades.tipoInmueble,
          departamento:propiedades.departamento,
          barrio:propiedades.barrio,
          precio:propiedades.precio,
          dormitorios:propiedades.dormitorios,
          baños:propiedades.baños,
          metros_terrenos:propiedades.metros_terrenos,
          metros_edificio:propiedades.metros_edificio,
          descripcion:propiedades.descripcion,
          baños:propiedades.baños

  })
  .then(() => {
      res.status(200).json ({ error: null, data: "Se ha agregado correctamente",propiedades })
  })
  .catch((error) => {
      res.status(400).json ({ error: message.error });
  })
}