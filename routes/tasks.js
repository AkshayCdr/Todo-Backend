import express from "express";
import { getTodo } from "../controller/getTodos.js";
import { addTodos } from "../controller/addTodos.js";
import { updateTodos } from "../controller/updateTodos.js";
import { deleteTodos } from "../controller/deleteTodos.js";

const router = express.Router();

router.get("/", getTodo);

router.post("/", addTodos);

router.put("/:id", updateTodos);

router.delete("/:id", deleteTodos);

export default router;
