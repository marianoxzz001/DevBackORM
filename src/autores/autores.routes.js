const express = require("express");
const autoresController = require("./autores.controller");

const router = express.Router();

// GET /autores
router.get("/autores", autoresController.listar);

// GET /autores/:id
router.get("/autores/:id", autoresController.buscarPorId);

// POST /autores
router.post("/autores", autoresController.criar);

// PUT /autores/:id
router.put("/autores/:id", autoresController.atualizar);

// DELETE /autores/:id
router.delete("/autores/:id", autoresController.deletar);

module.exports = router;
