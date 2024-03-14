import express from "express";

import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.json());

import tasksRouter from "./routes/tasks.js";

app.use("/task", tasksRouter);

app.listen(3000, () => {
  console.log("listening port ");
});
