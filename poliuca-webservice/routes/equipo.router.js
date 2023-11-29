const express = require("express");
//enrutador para configurar
const router = express.Router();

const equipoController = require("../controllers/equipo.controller");

router.get("/getAll/",equipoController.findAll);
router.post("/create/",equipoController.create);

module.exports = router;