const mongoose = require('mongoose')

//Url de mongo atlas
const uri = 'mongodb+srv://admin:OQyvGu4aqYmEUnFd@usuarios.yivmizk.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri,{
    useNewUrlParser:true, 
    useUnifiedTopology:true
})
.then(() => console.log("Conexion exitosa a la base de datos"))
.catch(err => console.log("Error al conectar con la base de datos", err));

const userSchema = new mongoose.Schema({
    username:   { type: String, required: true },
    email:      { type: String, required: true} ,
    password:   { type: String, required: true} ,
    picture:    { type: String },
    role:       { type: String, default:'user' },
});

module.exports = mongoose.model('Users', userSchema);

