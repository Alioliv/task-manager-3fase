import { tasksRepository } from "../repositories/tasks.repository"
import type { CreateTaskDTO } from "../repositories/tasks.repository"

export const tasksService = {
  async create(data: CreateTaskDTO) {
    return await tasksRepository.create(data)
  }
}