const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel');


exports.authenticateUser = (req, res) => {
    const { email, password } = req.body;
    userModel
    .findOne({email}) //se puede usar cualquier parametro o atributo para ser verificado.
    .then((user) => {
        //Si no se encuentra el usuario, se devuelve un mensaje de error
        if(!user) { //la expresion !user se usa para verificar que user sea falso o nulo.
            return res.status(404).json({error: 'user not found'})
        };
        //validacion del usuario 
        bcrypt.compare(password, user.password, function(err, result) {
            if(err){
                res.status(500).json({error: err.message});
            } else if(result){
                //Si la contraseña conincide el usuario se autentica exitosamente
                res.status(200).json({message: 'authentication was successful'});
            }else {
                // Si la contraseña no coincide. se devuelve un mensaje de error
                res.status(401).json({message: 'authentication failed'})
            }
        });
    })
    .catch((err) => res.status(500).json({error: err.message}))
};