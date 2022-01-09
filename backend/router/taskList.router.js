const express = require('express');
const { getAllTask } = require('../service/taskList.service');
const taskListController = require('./../controlller/tasklist.controller');

const router = express.Router();

router.get('/', taskListController.getAllTask);
router.get('/get-by-id/:id', taskListController.getIdTask);
router.post('/add', taskListController.createTask);
router.put('/edit/:id', taskListController.updateTask);
router.delete('/delete/:id', taskListController.deleteTask);


module.exports = router;