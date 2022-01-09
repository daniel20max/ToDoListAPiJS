const mongoose = require("mongoose")

async function conn(){
    await mongoose.connect("mongodb://localhost:27017/tarefas", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() =>{
        console.log("Banco Conectado")
    }).catch((err) =>{
        console.log(`Erro ao Conectar ${err}`)
    })
}

module.exports = conn
