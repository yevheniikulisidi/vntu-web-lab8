import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

@Injectable()
export class AppService {
  getDate() {
    return dayjs().tz('Europe/Kyiv').format('DD.MM.YYYY');
  }
}
