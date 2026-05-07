import { tasksRepository } from "../repositories/tasks.repository"
import { taskHistoryRepository } from "../repositories/taskHistory.repository"
import { EventType } from "../prisma/generated/prisma/client"
import type { CreateTaskDTO } from "../repositories/tasks.repository"

export const tasksService = {
  async create(data: CreateTaskDTO) {
    const task = await tasksRepository.create(data)
    await taskHistoryRepository.create(task.id, EventType.CREATED)
    return task
  }
}