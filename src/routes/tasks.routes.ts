import { Router } from "express"
import { tasksController } from "../controllers/tasks.controller"

const router = Router({ mergeParams: true })

router.post("/", tasksController.create)

export default router