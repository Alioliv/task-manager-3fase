import express from "express"

import tasksRouter from "./routes/tasks.routes"

const app = express()

app.use(express.json())

// === TAREFAS === 
app.use("/projects/:projectId/tasks", tasksRouter)

export default app