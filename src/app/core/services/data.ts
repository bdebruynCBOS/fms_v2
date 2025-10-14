import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IUserContext } from '../interfaces/user';
import { Company } from '../interfaces/company';
import { Notification, NotificationIn, NotificationList, NotificationView } from '../interfaces/notifications';
import { ISystemSettings } from '../interfaces/system-settings';
import { IMenuItem } from '../interfaces/menu-item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private http = inject(HttpClient);
  private authService = inject(AuthService);

  getUserContext() {
    return this.http.get<IUserContext>(environment.API_URL + 'user/context');
  }

  getUserCompanies(showAll: boolean) {
    return this.http.get<Company[]>(environment.API_URL + 'user/companies?showall=' + showAll);
  }

  getUsersCompanies(userId: string, showAll: boolean) {
    return this.http.get<Company[]>(environment.API_URL + `user/userscompanies/${userId}?showall=${showAll}`);
  }

  getCompany(id: string) {
    return this.http.get<Company>(environment.API_URL + 'company/' + id);
  }

  /// ---------------------------------------------------------------------------------------------------------------------------
  /// Notifications
  /// ---------------------------------------------------------------------------------------------------------------------------
  getNotifications() {
    return this.http.get<Notification[]>(environment.API_URL + 'notifications');
  }

  getNotificationByUserId(userId: string) {
    return this.http.get<Notification[]>(environment.API_URL + `notifications/${userId}/matters`);
  }

  getMatterNotifications() {
    return this.http.get<NotificationView[]>(environment.API_URL + 'notifications/usermatters');
  }

  getMatterNotificationsById(userId: string) {
    return this.http.get<NotificationView[]>(environment.API_URL + `notifications/${userId}/usermatters`);
  }

  getAllNotifications(limit: number, skip: number) {
    return this.http.get<NotificationList>(environment.API_URL + 'notifications/all?q=' + '&limit=' + limit + '&skip=' + skip, {});
  }

  postNotification(body: NotificationIn): any {
    return this.http.post(environment.API_URL + 'notifications', JSON.stringify(body));
  }

  markNotificationRead(id: string) {
    return this.http.get<void>(environment.API_URL + 'notifications/' + id + '/read');
  }

  completeNotification(id: string): any {
    return this.http.get(environment.API_URL + 'notifications/' + id + '/complete');
  }

  /// ---------------------------------------------------------------------------------------------------------------------------
  /// SystemSettings
  /// ---------------------------------------------------------------------------------------------------------------------------

  getSystemSettings() {
    return this.http.get<ISystemSettings[]>(environment.API_URL + `systemsettings`);
  }

  // ---------------------------------------------------------------------------------------------------------------------------
  /// MenuItems
  /// ---------------------------------------------------------------------------------------------------------------------------

  getMenuItems() {
    return this.http.get<IMenuItem[]>(environment.API_URL + 'menu');
  }

  adduserMenuItem(id: string) {
    return this.http.post<number>(environment.API_URL + 'menu/' + id, '');
  }

  setUserMenuItemDefault(id: string) {
    return this.http.patch(environment.API_URL + 'menu/' + id + '/setdefault', '');
  }

  removeUserMenuItem(id: string) {
    return this.http.delete<number>(environment.API_URL + 'menu/delete/' + id);
  }
}
