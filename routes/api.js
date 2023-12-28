const express = require('express')

const router = express.Router()

const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteItem,
} = require("../controllers/tasks");

//routes
router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteItem)

module.exports = router