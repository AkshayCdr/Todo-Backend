import { updateData } from "../Repository.js";

export async function updateTodos(req, res) {
  try {
    const id = req.params.id;
    const data = req.body;
    updateData(id, data);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(400).json({ message: error.message });
  }
}
