import { getData } from "../Repository.js";

export async function getTodo(req, res) {
  try {
    const data = await getData();
    res.send(data);
  } catch (error) {
    res.sendStatus(500).json({ message: error.message });
  }
}
