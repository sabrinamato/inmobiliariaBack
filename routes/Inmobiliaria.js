const express = require("express");
const router = express.Router();
const { propiedades, addPublicacion } = require("../controllers/Inmobiliaria");

router.get("/propiedades", propiedades);
router.post("/addPublicacion", addPublicacion);


module.exports = router;
