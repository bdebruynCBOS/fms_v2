import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { Notification, NotificationView } from '../interfaces/notifications';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from './data';
import { environment } from '../../../environments/environment';
import { firstValueFrom, map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  _hubConnection: signalR.HubConnection | undefined;
  notifications = signal<Notification[]>([]);
  importantNotifications = signal<Notification[]>([]);
  matterNotifications = signal<Notification[]>([]);
  notificationViews = signal<NotificationView[]>([]);

  snackBar = inject(MatSnackBar);
  private dataService = inject(DataService);
  private destroyRef = inject(DestroyRef);

  startConnection(access_token: string) {
    const connection = environment.SIGNALR_API_URL + 'notifications';

    this._hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(connection, { accessTokenFactory: () => access_token })
      .configureLogging(signalR.LogLevel.Information)
      .build();

    this._hubConnection.start();

    this._hubConnection.on('Send', (data: any) => {
      this.openSnackBar(data.notification);
      this.loadNotifications();
    });
  }

  loadNotifications() {
    this.dataService.getNotifications()
      .pipe(
        takeUntilDestroyed(this.destroyRef), 
        map(data => {
          this.notifications.update(() => data);
          const important = data.filter(x => x.notificationParentTypeBW == 4 && x.notificationTypeBW == 2);
          this.importantNotifications.update(() => important);
        })
      )
      .subscribe()
  }

  loadMatterNotifications() {
    this.dataService.getMatterNotifications()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(data => {
        this.notificationViews.update(() => data);

        const other = data.flatMap(x => x.notifications);
        this.matterNotifications.update(() => other);
      });
  }

  completeNotification(notificationId: string) {
    this.dataService.completeNotification(notificationId)
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(() => {
      this.clearData();
      this.loadMatterNotifications();
      this.loadNotifications();
    });
  }

  clearData() {
    this.notifications.set([]);
    this.importantNotifications.set([]);
    this.matterNotifications.set([]);
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5500,
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }

}
