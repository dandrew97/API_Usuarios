// llamamos la libreria de express
const express = require('express');
const app = express(); // creamos la constante app que contenga todos los metodos y clases de express
const port = 3000; // creación del puerto 
const userRoutes = require('./routes/userRoutes'); // importamos la clase del fichero js llama userRoutes

//IMPORTANTE: Con el require importamos cosas de java script

// usamos una funcion middleware que permita convertir la base de datos tipo jason, que este mas ordenado y sea mas legible
app.use(express.json());

//middleware: es una funcion que se ejecuta del lado del cliente y el servidor en una aplicacion web. Realiza las tareas que uno le asigne como autenticacion, registro de solicitudes, control de acceso, conversión de datos, validación de datos, entre otros. ejemplo de otros middleware: require, reponsive...

//parametro de ruta para cuando se ejecute la API pueda acceder a la información
app.use('/users', userRoutes); 

// función que permite conectar a el puerto
app.listen(port, () => { console.log("el servidor se ejecuta http://localhost:" + port)})
