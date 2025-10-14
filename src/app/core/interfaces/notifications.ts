export interface Notification {
  id: string;
  hasRead: boolean;
  dateCreated: number;
  notificationText: string;
  notificationTypeBW: number;
  notificationParentTypeBW: number;
  actionKey: string;
  action: string;
  notificationKeys: NotificationKey[];
  onHover: boolean;
  notificationColor: string;
  notificationIcon: string;
}

export interface NotificationView {
  type: string;
  notifications: Notification[];
}

export interface NotificationKey {
  id: string;
  key: string;
  value: string;
}

export interface NotificationList {
  count: number;
  notifications: NotificationItem[];
}

export interface NotificationItem {
  id: string;
  createdUser: boolean;
  dateCreated: number;
  notification: string;
}

export interface NotificationIn {
  notificationText: string;
  // assetId: string;
  userAudienceBW: number[];
}
