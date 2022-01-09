const mongoose = require('mongoose');

const TaskModel = new mongoose.Schema({
    titulo: { type: String, require: true},
    descricao: { type: String, require: true},
    status: { type: String, require: true},
    prioridade: { type: String, require: true},
    prazo: { type: String, require: true},
    dataCriacao: { type: Date, default: Date.now}
})

const taskList = mongoose.model("tarefas", TaskModel);

module.exports = taskList;