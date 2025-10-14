import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu';
import { UserService } from '../../services/user';
import { AuthService } from '../../services/auth';
import { DataService } from '../../services/data';
import { NotificationService } from '../../services/notification';
import { SystemSettingsService } from '../../services/system-settings';
import { FranchiseService } from '../../services/franchise';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IUserContext } from '../../interfaces/user';

@Component({
  selector: 'app-auth-callback',
  imports: [],
  templateUrl: './auth-callback.html',
  styleUrl: './auth-callback.scss'
})
export class AuthCallback implements OnInit {
  private userService = inject(UserService);
  private authService = inject(AuthService);
  private notificationService = inject(NotificationService);
  private systemService = inject(SystemSettingsService);
  private franchiseService = inject(FranchiseService);
  private ds = inject(DataService);
  private menuService = inject(MenuService);
  private destroyRef = inject(DestroyRef);

  async ngOnInit() {
    await this.authService.completeAuthentication();

    this.initSession();
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
