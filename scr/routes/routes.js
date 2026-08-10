const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');

router.get('/alunos', controller.listar);
router.get('/alunos/:id', controller.buscarPorId);
router.post('/alunos', controller.cadastrar);
router.delete('/alunos/:id', controller.excluir);

module.exports = router;