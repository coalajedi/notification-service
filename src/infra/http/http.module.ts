import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { SendNotification } from '@application/use-cases/send-notification';
import { Module } from '@nestjs/common';
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
