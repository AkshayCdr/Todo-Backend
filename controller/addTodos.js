import { setData } from "../Repository.js";

export async function addTodos(req, res) {
  try {
    const data = req.body;
    setData(data);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(400).json({ message: error.message });
  }
}
