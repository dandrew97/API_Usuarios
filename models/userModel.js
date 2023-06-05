const mongoose = require('mongoose')

//Url de mongo atlas
const uri = 'mongodb+srv://admin:OQyvGu4aqYmEUnFd@usuarios.yivmizk.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology:true
})
.then(() => console.log("conexion exitosa de bd"))
.catch(err => console.log("error al conectar bd", err));

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
});

module.exports = mongoose.model('Users', userSchema);

