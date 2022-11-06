const express = require ("express");
const router = express.Router();
const LivrosController =  require("./controllers/LivrosController");

router.get('/',LivrosController.mostrarTudo);

router.get("/:id",LivrosController.mostrarLivro);

router.post("/",LivrosController.guardar)

module.exports = router;