import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract create(notifications: Notification): Promise<void>;
}
