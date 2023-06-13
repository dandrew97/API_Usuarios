//Ejemplo para usar multer

//Se importan las dependencias necesarias
const multer = require('multer');
const express = require('express');
const fs = require('fs')

//Inicializar la aolicion express
const app = express();

// Se especifica un directirio de destino para almacenar los archivos 
const upload = multer({dest: 'uploads/'});

//ruta HTTP que va a manejar la suida de archivos 
app.post('/upload', upload.single('file'), (req, res) => {
    //aqui se especifica como se va amanejar la subida de estos archivos y donde se van a almacenar
    const file = req.file //constante que se encarga de recibir el requerimiento

    //Condicional que verifica que si se haya recibido un archivo
    if(!file) {
        return res.status(400).send('No se ha enviado ningún archivo');
    }
    //guardar el archivo en una ubicacion especifica
    const filePath = 'uploads/' + file.filename;

    //nombrando el archivo y guardandolo
    fs.renameSync(file.path, filePath);

    // Extraer informacion del fichero que vamos a subir
    const {originalname, mimetype, size} = file;
    res.send(`Archivo '${originalname}' subido exitosamente.\nTamaño: ${size} bytes.\nTipo MIME: ${mimetype}`);
});

// creación de un sevidor
const port = 3000;
app.listen(port, () => { console.log("el servidor se ejecuta http://localhost:" + port)})