import { deleteFunction } from "../Repository.js";

export async function deleteTodos(req, res) {
  try {
    const id = req.params.id;
    deleteFunction(id);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(400).json({ message: error.message });
  }
}
