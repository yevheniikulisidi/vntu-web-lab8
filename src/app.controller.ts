import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { FeedbacksRepository } from './feedbacks/repositories/feedbacks.repository';
import { CreateFeedbackDto } from './dtos/create-feedback.dto';
import { UsersRepository } from './users/repositories/users.repository';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly feedbacksRepository: FeedbacksRepository,
    private readonly usersRepository: UsersRepository,
  ) {}

  @Get()
  @Render('index')
  async root() {
    const feedbacks = await this.feedbacksRepository.findFeedbacksByPage('/');
    return { feedbacks, date: this.appService.getDate() };
  }

  @Get('labs/lab2')
  @Render('labs/lab2')
  async lab2() {
    const feedbacks =
      await this.feedbacksRepository.findFeedbacksByPage('/labs/lab2');
    return { feedbacks, date: this.appService.getDate() };
  }

  @Get('labs/lab3')
  @Render('labs/lab3')
  async lab3() {
    const feedbacks =
      await this.feedbacksRepository.findFeedbacksByPage('/labs/lab3');
    return { feedbacks, date: this.appService.getDate() };
  }

  @Get('labs/lab4')
  @Render('labs/lab4')
  async lab4() {
    const feedbacks =
      await this.feedbacksRepository.findFeedbacksByPage('/labs/lab4');
    return { feedbacks, date: this.appService.getDate() };
  }

  @Get('labs/lab5')
  @Render('labs/lab5')
  async lab5() {
    const feedbacks =
      await this.feedbacksRepository.findFeedbacksByPage('/labs/lab5');
    return { feedbacks, date: this.appService.getDate() };
  }

  @Get('feedbacks')
  @Render('feedbacks')
  async feedbacks() {
    const feedbacks =
      await this.feedbacksRepository.findFeedbacksByPage('/feedbacks');
    return { feedbacks, date: this.appService.getDate() };
  }

  @Post('feedbacks')
  async createFeedback(@Body() body: CreateFeedbackDto) {
    return await this.feedbacksRepository.createFeedback(body);
  }

  @Get('feedbacks-data')
  async getFeedbacks() {
    return await this.feedbacksRepository.findFeedbacksWithCount();
  }

  @Get('admin')
  @Render('admin')
  admin() {
    return {};
  }

  @Get('users')
  @Render('users')
  users() {
    return {};
  }

  @Get('users-data')
  async getUsers() {
    return await this.usersRepository.findUsersWithoutIds();
  }
}
