import { PrismaClient } from '@prisma/client'
import { withOptimize } from '@prisma/extension-optimize'

export const prisma = new PrismaClient().$extends(
  withOptimize({
    dashboardUrl: 'https://optimize-dev-pr402.datacdn.workers.dev',
    ingestionUrl: 'https://optimize-ingestion-dev-pr402.datacdn.workers.dev',
    token: process.env.OPTIMIZE_API_KEY!,
  }),
)
