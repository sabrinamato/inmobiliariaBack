const express = require("express");
const router = express.Router();
const { propiedades } = require("../controllers/Inmobiliaria");
const { verifyToken } = require("../validators/verifyToken");

router.get("/propiedades", verifyToken, propiedades);

module.exports = router;
