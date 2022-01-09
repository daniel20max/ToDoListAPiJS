const taskService = require("../service/taskList.service")
const mongoose = require('mongoose')

const getAllTask = async (req, res) => res.send(await taskService.getAllTask())

const getIdTask =  async (req, res) => {
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).send({message: 'Id invalido.'})
        return
    }
    const task = await taskService.getIdTask(id);
    if(!task) {
        res.status(404).send({message: 'Tarefa não encontrado'});
        return;
    }
    res.send(task);
}
const createTask = async (req, res) => {
    const task = req.body
    await taskService.createTask(task)
    .then(() => {
        res.send({message: ` A Tafera ${task.titulo} foi adicionada`})
    })
    .catch((err) => {
        res.status(500).send({message: `Erro: ${err}`})
    })
}
const updateTask = async (req, res) => {
    const id = req.params.id
    const taskUpdate = req.body
    await taskService.updateTask(id, taskUpdate)
    .then(() => res.send({message: 'Tarefa Atualizada'}))
    .catch(err => res.status(500).send({message: `Erro: ${err}`}))
}
const deleteTask = async (req, res) => {
    const id = req.params.id
    await taskService.deleteTask(id)
    .then(() => res.send({message: 'Tarefa excluida'}))
    .catch((err) => res.status(500).send({message: `Erro ${err}`}))
}

module.exports = {
    getAllTask,
    getIdTask,
    createTask,
    updateTask,
    deleteTask
}
