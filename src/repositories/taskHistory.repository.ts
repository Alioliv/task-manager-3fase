import { prisma } from "../prisma/prisma"
import { EventType } from "../prisma/generated/prisma/client"

export const taskHistoryRepository = {
  async create(taskId: string, eventType: EventType) {
    return await prisma.taskHistory.create({
      data: { taskId, eventType }
    })
  },

  async findByTaskId(taskId: string) {
    return await prisma.taskHistory.findMany({
      where: { taskId },
      orderBy: { createdAt: "asc" }
    })
  }
}