const express = require("express");
const router = express.Router();
const
 { propiedades, 
   addPublicacion,
   eliminarInmueble,
   editarInmueble 
 } = require("../controllers/Inmobiliaria");

router.get("/propiedades", propiedades);
router.post("/addPublicacion", addPublicacion);
router.delete("/api/eliminar", eliminarInmueble);
router.update("/api/modificar", editarInmueble);


module.exports = router;
