import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class FeedbacksRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createFeedback(
    data: Pick<Prisma.FeedbackCreateInput, 'page' | 'name' | 'email' | 'text'>,
  ) {
    return await this.prisma.feedback.create({ data });
  }

  async findFeedbacksByPage(page: string) {
    return await this.prisma.feedback.findMany({ where: { page } });
  }

  async findFeedbacksWithCount() {
    const [feedbacks, count] = await this.prisma.$transaction([
      this.prisma.feedback.findMany(),
      this.prisma.feedback.count(),
    ]);

    return { feedbacks, count };
  }
}
