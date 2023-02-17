const express = require("express");
const router = express.Router();
const {
  propiedades,
  addProp,
  deleteProp,
  modify,
} = require("../controllers/Inmobiliaria");
const { verifyToken } = require("../validators/verifyToken");

router.get("/propiedades", propiedades);
router.post("/propiedades/add", addProp);
router.delete("/propiedades/delete/:id", deleteProp);
router.put("/propiedades/editar/:id", modify);

module.exports = router;
