import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './core/services/user';
import { AuthService } from './core/services/auth';
import { IUserContext } from './core/interfaces/user';
import { NotificationService } from './core/services/notification';
import { SystemSettingsService } from './core/services/system-settings';
import { FranchiseService } from './core/services/franchise';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DataService } from './core/services/data';
import { MenuService } from './core/services/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet />`,
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private userService = inject(UserService);
  private authService = inject(AuthService);
  private notificationService = inject(NotificationService);
  private systemService = inject(SystemSettingsService);
  private franchiseService = inject(FranchiseService);
  private ds = inject(DataService);
  private menuService = inject(MenuService);
  private destroyRef = inject(DestroyRef);

  async ngOnInit() {
    await this.initSession();
  }

  async initSession() {
    const user = this.authService.user();
    const isLoggedIn = this.authService.isLoggedIn();

    if (!user || !isLoggedIn) {
      return;
    }

    this.notificationService.startConnection(user.access_token);
    this.systemService.loadSystemSettings();
    this.notificationService.loadNotifications();

    await this.initUser();
  }

  private async initUser() {
    if (!this.franchiseService.currentFranchise()) {
      await this.franchiseService.loadMyFranchisees();
    }

    const userContext = this.userService.userContext();

    if (userContext) {
      this.handleUserContext(userContext);
      return;
    }

    this.ds.getUserContext()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => {
        this.handleUserContext(data);
      });
  }

  private handleUserContext(userContext: IUserContext) {
    this.notificationService.loadMatterNotifications();

    this.userService.userContext.update(() => userContext);

    if (!this.userService.userFetched()) {
      this.userService.userFetched.set(true);
    }

    this.menuService.menus.update(() => userContext.menuItems);

    if (this.notificationService.matterNotifications?.length > 0) {
      this.userService.goToMatters();
      return;
    }

    this.userService.goToDefaultRoute();
  }
}
