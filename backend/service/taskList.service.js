const taskList = require("./../models/taskList");

const getAllTask = async () => await taskList.find()
const getIdTask = async (id) => await taskList.findById(id)
const createTask = async (task) =>  await taskList.create(task)
const updateTask = async (id, task) => await taskList.findByIdAndUpdate(id, task)
const deleteTask = async (id) => await taskList.findByIdAndDelete(id)

module.exports = {
    getAllTask,
    getIdTask,
    createTask,
    updateTask,
    deleteTask
}