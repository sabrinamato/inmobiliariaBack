const knex = require("../config/knexfile");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { email, contraseña } = req.body;
  console.log(contraseña);
  await knex("users")
    .where("email", email)
    .then(async (usuarioDB) => {
      let usuario = usuarioDB[0];
      console.log(usuario);
      const validPassword = await bcrypt.compare(
        contraseña,
        usuario.contraseña
      );
      if (!validPassword) {
        return res.status(400).json({ error: "Contraseña no valida" });
      }
      const token = jwt.sign(
        {
          nombre: usuario.nombre,
          id: usuario.id,
          tipousuario: usuario.tipousuario,
        },
        TOKEN_SECRET
      );
      res.json({ error: null, data: "Login exitoso", token });
    });
};
