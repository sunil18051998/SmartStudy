import Task from '../models/Task.js';

// GET all tasks
export const getTasks = async (req, res) => {
  const tasks = await Task.find({});
  res.json(tasks);
};

// POST create task
export const createTask = async (req, res) => {
  const task = new Task(req.body);
  const saved = await task.save();
  res.status(201).json(saved);
};
