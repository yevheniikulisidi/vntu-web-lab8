import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findUsersWithoutIds() {
    return await this.prisma.user.findMany({
      select: { user: true, pass: true },
    });
  }
}
