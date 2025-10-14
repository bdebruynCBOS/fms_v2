import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './core/services/user';
import { AuthService } from './core/services/auth';
import { IUserContext } from './core/interfaces/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `<router-outlet />`,
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private userService = inject(UserService);
  private authService = inject(AuthService);

  async ngOnInit() {
    this.initSession();
  }

   initSession() {
    const user = this.authService.user();
    if (!user || !this.authService.isLoggedIn) {
      return;
    }

    // this.notificationService.startConnection(this.authService.user.access_token);
    // this.systemService.loadSystemSettings();
    // this.notificationService.loadNotifications();

    // this.dataService.getUserContext()
    // .pipe(takeUntilDestroyed(this.destroyRef))
    // .subscribe((userContext) => {
    //   this.notificationService.loadMatterNotifications()
    //   .then(() => this.handleUserContext(userContext));
    // });
  }

  private handleUserContext(userContext: IUserContext) {
    this.userService.userContext.update(() => userContext);

    if (!this.userService.userFetched()) {
      this.userService.userFetched.set(true);
    }

    // this.menuService.menus = userContext.menuItems;

    // if (this.notificationService.matterNotifications?.length > 0) {
    //   this.userService.goToMatters();
    // } else {
    //   this.userService.goToDefaultRoute();
    // }
  }
}
