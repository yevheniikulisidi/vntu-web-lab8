import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { FeedbacksRepository } from './repositories/feedbacks.repository';

@Module({
  imports: [DatabaseModule],
  providers: [FeedbacksRepository],
  exports: [FeedbacksRepository],
})
export class FeedbacksModule {}
