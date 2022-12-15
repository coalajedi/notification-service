import { Module } from '@nestjs/common';
import { NotificationsRepository } from 'src/app/repositories/notifications-repository';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { PrismaService } from '../database/prisma/prisma.service';
import { PrismaNotificationsRepository } from '../database/prisma/repositories/prisma-notifications-repository';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    PrismaService,
    SendNotification,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
})
export class HttpModule {}
