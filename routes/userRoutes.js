const express = require('express');
const authController = require('../controllers/authController')
const router = express.Router(); // función para asignar las rutas
const {upload} = require("../middlewares/fileUpload");
const {verifyToken} = require("../middlewares/verifyToken");
const userController = require('../controllers/userController')  // Importar los controladores

router.get('/', userController.getAllUsers);

router.post('/create', userController.createUser);

router.put('/update/:id', verifyToken, userController.updateUser);

router.delete('/delete/:id', verifyToken, userController.deleteUser);

router.post('/login', authController.authenticateUser)

router.get('/:email', userController.getUser)

module.exports = router;



