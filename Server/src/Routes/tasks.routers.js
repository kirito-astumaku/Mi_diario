import { Router } from "express";
import {createTask,deleteTask,getTask,getTasks,updateTask,} from "../Controllers/tasks.controller.js";
import { auth } from "../Middlewares/auth.meddleware.js";
import { validateSchema } from "../Middlewares/validator.middlewre.js";
import { createTaskSchema } from "../schemas/task.schema.js";

const router = Router();

router.get("/tasks", auth, getTasks);

router.post("/tasks", auth, validateSchema(createTaskSchema), createTask);

router.get("/tasks/:id", auth, getTask);

router.put("/tasks/:id", auth, updateTask);

router.delete("/tasks/:id", auth, deleteTask);

export default router;