import { CommonModule } from '@angular/common';
import { Component, DestroyRef, effect, inject, OnInit, signal, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationEnd, NavigationError, NavigationStart, Router, RouterModule } from '@angular/router';
import { environment } from '../../environments/environment';
import { Notification } from '../core/interfaces/notifications';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserService } from '../core/services/user';
import { MenuService } from '../core/services/menu';
import { AuthService } from '../core/services/auth';
import { NotificationService } from '../core/services/notification';
import { DataService } from '../core/services/data';
import { FranchiseService } from '../core/services/franchise';
import { MatDialog } from '@angular/material/dialog';
import { toSignal } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';
import { ProfilePicture } from '../shared/components/profile-picture/profile-picture';

interface IToolbarItems {
  toolTip: string,
  icon: string,
  text: string,
  mobile?: boolean,
  onClick: () => void;
}

@Component({
  selector: 'app-layout',
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatSidenavModule, RouterModule, MatMenuModule, MatButtonModule, MatTooltipModule, ProfilePicture],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppLayout implements OnInit {
  sideNav = viewChild<MatSidenav>('sideNav');
  sideNavRight = viewChild<MatSidenav>('sideNavRight');
  settingMenu = viewChild<MatMenuModule>('sideNavRight');

  siteNavType = signal("");
  loading = signal(false);
  desktopItems = signal<IToolbarItems[]>([]);
  mobileItems = signal<IToolbarItems[]>([]);
  resetLink = environment.authority + `Manage/ChangePassword?returnurl=${window.location.href}`;

  userService = inject(UserService);
  menuService = inject(MenuService);
  authService = inject(AuthService);
  notificationService = inject(NotificationService);
  dataService = inject(DataService);
  private franchiseService = inject(FranchiseService);
  // private companyService = inject(CompanyService);
  private dialog = inject(MatDialog);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  private routerEvent = toSignal(this.router.events.pipe(debounceTime(50)), { initialValue: null });

  constructor() {
    effect(() => {
      const event = this.routerEvent();
      if (event instanceof NavigationStart) {
        this.loading.update(() => true);
      }

      if (event instanceof NavigationEnd || event instanceof NavigationError) {
        this.loading.update(() => false);
      }
    })
  }

  ngOnInit(): void {
    // Desktop toolbar buttons (mobile = false)
    const desktopItems: IToolbarItems[] = [
      {
        toolTip: 'Product Suppliers Pricelists',
        icon: 'local_shipping',
        text: '',
        onClick: () => this.openProductSuppliersPricelists(),
      },
      {
        toolTip: 'Franchise Open Areas',
        icon: 'business',
        text: '',
        onClick: () => this.openFranchiseAreas(),
      },
      {
        toolTip: 'Calendar',
        icon: 'event',
        text: '',
        onClick: () => this.openNav('my calendar'),
      },
      {
        toolTip: 'Documents',
        icon: 'folder',
        text: '',
        onClick: () => this.openNav('documents'),
      },
      {
        toolTip: 'Birthdays',
        icon: 'cake',
        text: '',
        onClick: () => this.openNav('birthdays'),
      },
      {
        toolTip: 'Contacts',
        icon: 'contacts',
        text: '',
        onClick: () => this.openNav('contacts'),
      },
      {
        toolTip: 'Notifications',
        icon: 'notifications',
        text: '',
        onClick: () => this.openNav('notifications'),
      },
      {
        toolTip: 'Urgent Matters',
        icon: 'warning',
        text: '',
        onClick: () => this.openMatters(),
      },
      {
        toolTip: 'Settings',
        icon: 'settings',
        text: '',
        onClick: () => {}
      }
    ];

    this.desktopItems.update(() => desktopItems)

    // Mobile menu buttons (mobile = true)
    const mobileItems: IToolbarItems[] = [
      {
        toolTip: 'Report a bug',
        icon: 'bug_report',
        text: 'Report a bug',
        onClick: () => this.openReportBug(),
      },
      {
        toolTip: 'Calendar',
        icon: 'event',
        text: 'Calendar',
        onClick: () => this.openNav('my calendar'),
      },
      {
        toolTip: 'Documents',
        icon: 'folder',
        text: 'Documents',
        onClick: () => this.openNav('documents'),
      },
      {
        toolTip: 'Contacts',
        icon: 'contacts',
        text: 'Contacts',
        onClick: () => this.openNav('contacts'),
      },
      {
        toolTip: 'Messages',
        icon: 'mail_outline',
        text: 'Messages',
        onClick: () => this.openNav('messages'),
      },
      {
        toolTip: 'Notifications',
        icon: 'notifications',
        text: 'Notifications',
        onClick: () => this.openNav('notifications'),
      },
      {
        toolTip: 'Sign Out',
        icon: 'subdirectory_arrow_left',
        text: 'Sign Out',
        onClick: () => this.signOut(),
      }
    ];

    this.mobileItems.update(() => mobileItems);
  }

  signOut() {
    // this.authService.endAuthentication();
    // this.userService.userContext = null;
  }

  openCalendar() {
    // this.router.navigate(['calendar']);
  }

  openReportBug() {
    // this.reportBug = this.dialog.open(ReportBug, {
    //   width: '400px'
    // });
  }

  openPreferences() {
    // this.userPreferences = this.dialog.open(UserPreferences, {
    //   width: '400px'
    // });
  }

  openBirthdays() {
    // this.birthdays = this.dialog.open(Birthdays, {
    //   width: '400px',
    //   height: 'auto'
    // });

    // this.birthdays.componentInstance.isDialog = true;
  }

  openNav(type: string) {
    // if (this.siteNavType == type) {
    //   this.menuService.smallNav = false;
    //   this.menuService.showMenuSearch = false;
    //   this.sidenavRight.toggle();
    //   return;
    // }
    // this.siteNavType = type;
    // if (!this.sidenavRight.opened) {
    //   this.sidenavRight.open();
    // }
  }

  notificationRead(item: Notification) {
    // this.dataService.markNotificationRead(item.id)
    //   .pipe(takeUntilDestroyed(this.destroyRef))
    //   .subscribe(() => {
    //     this.notificationService.notifications = [];
    //     this.notificationService.importantNotifications = [];
    //     this.notificationService.loadNotifications();
    //   });
  }

  close() {
    // this.menuService.smallNav = false;
    // this.menuService.showMenuSearch = false;
    this.sideNavRight()?.close();
  }

  openAuth() {
    // this.authService.startAuthentication();
  }

  goHome() {
    // this.router.navigate([this.userService.userContext.defaultRoute]);
  }

  openMatters() {
    // this.router.navigate(['matterstoattend']);
  }

  openFranchiseAreas() {
    // this.franchiseOpenAreas = this.dialog.open(FranchiseOpenAreas, {
    //   minWidth: '800px',
    //   height: '600px'
    // });
  }

  openProductSuppliersPricelists() {
    // this.dialog.open(ProductSupplierPricelistsComponent, { minWidth: '800px', height: '600px' });
  }

}
