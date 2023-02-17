const express = require("express");
const router = express.Router();
const { propiedades } = require("../controllers/Inmobiliaria");

router.get("/propiedades", propiedades);

module.exports = router;
