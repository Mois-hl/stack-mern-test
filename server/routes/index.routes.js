import { Router } from "express";
import { pool } from "../db.js";
import { 
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
 } from "../controller/tasks.controllers.js";

const router = Router();

router.get('/tasks', getTasks);

router.get('/task/:id', getTask);

router.post('/task', createTask);

router.put('/task/:id', updateTask);

router.delete('/task/:id', deleteTask);

export default router;