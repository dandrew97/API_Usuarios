const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs')

// funcion que permite exportar metodos o clases para poder ser usados en otros ficheros
exports.getAllUsers = (req, res) => {
    userModel.find()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({error: err.message}))
}

//Crea el usuario
//Forma de crear variables llamada estructuración de objeto que permite extraer valores de un objeto y asignarlos a una linea de codigo
exports.createUser = (req, res) => {
    const { username, email, password } = req.body;
    const saltRounds = 10; //Ahora debemos cifrar la contrasña
  
    userModel.findOne({ email: email }) // Buscar si el usuario ya existe por su correo electrónico
      .then(existingUser => {
        if (existingUser) {
          return res.status(400).json({ message: 'User already exists' });
        }
        //Funcion para cifrar la contraseña
        bcrypt.hash(password, saltRounds, function(err, hash) {
          if (err) {
            return res.status(500).json({ error: err.message });
          } else {
            const newUser = new userModel({
              username,
              email,
              password: hash // Guardar la contraseña cifrada
            });
  
            newUser
              .save()
              .then(newUser => res.status(201).json({ success: 'created' }))
              .catch(err => res.status(500).json({ message: 'An error has occurred', err }));
          }
        });
      })
      .catch(err => res.status(500).json({ message: 'An error has occurred', err }));
  };

exports.updateUser = (req, res) => {
    const {id} = req.params;
    const {username, email, password} = req.body;
    const saltRounds = 10; //Ahora debemos cifrar la contrasña
    if(password) {
        bcrypt.hash (Password, saltRounds, function(err, hash) {
            if(err) {
                res.status(500).json({error:err.message})
            } else {
                updateUserWithHash(id, username, email, hash, res);
            }
        });
    } else {
    updateUserWithHash(id, username, email, null, res);
    }
};

function updateUserWithHash(id, username, email, hash, res) {
    const updateFields = { username, email };
    if(hash) {
        updateFields.password = hash;
    }

    userModel
        .findByIdAndUpdate(id, {username, email, password:hash}, {new: true})
        .then(user => {
            if(!user)throw new Error(`user with id ${id} not found`);
            res.status( 200 ).json(user)
        })
        .catch( err => res.status(500).json({message: 'An error has ocurred', err}))
}          
 

exports.deleteUser = (req, res) => {
    const {id} = req.params;
    userModel.findByIdAndDelete(id)
    .then(user => {
        if(!user)throw new Error(`user with id ${id} not found`);
        res.status( 200 ).json({message: 'user deleted'})
    })
    .catch( err => res.status(500).json({message: 'An error has ocurred', err}))
};