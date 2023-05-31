const express = require('express');
const authController = require('../controllers/authController')

// función para asignar las rutas 
const router = express.Router();

// Importar los controladores
const userController = require('../controllers/userController')

router.get('/', userController.getAllUsers);

router.post('/', userController.createUser);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

router.post('/login', authController.authenticateUser)

module.exports = router;



