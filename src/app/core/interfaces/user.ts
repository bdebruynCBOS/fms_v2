import { IMenuItem } from "./menu-item";

export interface IUserContext {
  id: string;
  displayName: string;
  userName: string;
  defaultRoute: string;
  roles: number[];
  audienceBw: number;
  menuItems: IMenuItem[];
  passwordExpiryDate: number;
}