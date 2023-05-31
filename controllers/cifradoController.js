const bcrypt = require('bcrypt')

//funcion que permite cifrar la contraseña cuando se crea el usuario originalmente
const saltRounds = 10;
const plainPassword = 'password123';
bcrypt.hash(plainPassword, saltRounds, function(err, hash){
    if(err) {throw err;}
    else { console.log( 'Se creó el hash de la contraseña'. hash ) }
});

//Funcion que permite autenticar el usuario
const hashredPassword = '$2b$10$'
const loginPassword = 'password123'
bcrypt.compare(hashredPassword, loginPassword, function(err, result) { //el compare: recibe 3 parametros: el hash, la contraseña y el callback
    if(err){
        console.log(err);
    } else if(result){
        console.log('La contraseña es valida');
    }else {
        console.log('La contrasela es invalida')
    }
})