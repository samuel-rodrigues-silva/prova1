const express = require('express');
const linkHeroku = 'https://git.heroku.com/polar-ocean-27430.gitgi';
const controller = require('../controller/controller')
const router = express.Router();

router.get('/customers',controller.listAll);
router.get('/customers/:cpf',controller.fetchCpf);
router.get('/customers/:cpf/dependents',controller.fetchDependents);
router.post('/customers',controller.create);
router.put('/customers/:cpf',controller.update);
router.delete('/customers/:cpf',controller.remove);

module.exports = router;