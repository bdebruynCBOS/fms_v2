import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { IMenuItem } from '../interfaces/menu-item';
import { DataService } from './data';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  showMenuSearch = signal(false);
  smallNav = signal(false);
  menus = signal<IMenuItem[]>([]);

  dataService = inject(DataService);
  private destroyRef = inject(DestroyRef);

  showAll(IsActive: boolean) {
    this.showMenuSearch.update(() => IsActive);
  }

  manageSmallNav() {
    const value = this.smallNav();

    if (value == true) {
      this.smallNav.update(() => false);
    }
  }

  makeDefault(item: IMenuItem) {
    this.dataService.setUserMenuItemDefault(item.id)
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(() => this.getMenuItems());
  }

  getMenuItems() {
    this.dataService.getMenuItems()
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe((data) => {
      this.menus.update(() => data);
    });
  }

}
