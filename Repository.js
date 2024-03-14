import { pool } from "./dbConnection.js";

export async function getData() {
  let client;
  try {
    client = await pool.connect();
    const query = "SELECT * FROM tasks";
    const result = await client.query(query);
    return result.rows;
  } catch (error) {
    console.error("Error executing query:", error);
    throw error;
  } finally {
    if (client) client.release();
  }
}

const getDate = () => {
  const today = new Date();
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);
  return formattedDate;
};

export async function setData(data) {
  let client;
  const today = getDate();
  console.log(formattedDate);
  try {
    client = await pool.connect();
    const query = `
    INSERT INTO tasks (description, taskname, priority, date)
    VALUES ($1, $2, $3, $4);`;
    // RETURNING *;`;

    const result = await client.query(query, [
      data.description,
      data.name,
      data.priority,
      data.date || today,
    ]);
  } catch (error) {
    console.log("Error excecuring query", error);
    throw error;
  } finally {
    if (client) client.release();
  }
}

export async function updateData(id, data) {
  let client;

  try {
    client = await pool.connect();
    const query = `
    UPDATE tasks 
    SET date = $1, 
        description = $2
    WHERE id = $3;`;
    const result = await client.query(query, [data.date, data.description, id]);
  } catch (error) {
    console.log("Error Excecuting query", error);
    throw error;
  } finally {
    if (client) client.release();
  }
}

export async function deleteFunction(id) {
  let client;
  try {
    client = await pool.connect();
    const query = `
    DELETE FROM tasks 
    WHERE id = $1;`;

    await client.query(query, [id]);
  } catch (error) {
    console.log("Error Excecuting query", error);
  } finally {
    if (client) client.release();
  }
}
