const express = require('express');
const authController = require('../controllers/authController')

// función para asignar las rutas 
const router = express.Router();

// Importar los controladores
const userController = require('../controllers/userController')

router.get('/', userController.getAllUsers);

router.post('/create', userController.createUser);

router.put('/update/:id', userController.updateUser);

router.delete('/delete/:id', userController.deleteUser);

router.post('/login', authController.authenticateUser)

module.exports = router;



