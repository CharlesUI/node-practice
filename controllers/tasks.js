const Task = require("../models/task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require('../error/customError')

//GET ALL TASKS
const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ success: true, data: { tasks, length: tasks.length } });
});

//CREATE SINGLE TASK
const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json(task);
})

//GET SINGLE TASK
const getTask = asyncWrapper(async (req, res, next) => {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
  
    if (!task) {
      return next(createCustomError(`Task with id:${taskId} not found`, 404))
    }
    res.status(201).json({ task });
})

//DELETE
const deleteItem = asyncWrapper(async (req, res) => {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId });

    if (!task) {
      return next(createCustomError(`Task with id:${taskId} not found`, 404))
    }
    res.status(200).json({ task })
})

//UPDATE
const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return next(createCustomError(`Task with id:${taskId} not found`, 404))
    }
    res.status(200).json({ task })
})

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteItem,
};
