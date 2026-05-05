import { prisma } from "../prisma/prisma"
import { Priority, Status } from "../prisma/generated/prisma/client"

// === Criação de tarefa === 
export interface CreateTaskDTO {
  title: string
  description?: string
  dueDate?: Date
  priority: Priority
}

export const tasksRepository = {
  async create(data: CreateTaskDTO) {
    return await prisma.task.create({
      data: {
        ...data,
        status: Status.PENDENTE
      }
    })
  }
}