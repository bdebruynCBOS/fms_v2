import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { ISystemSettings } from '../interfaces/system-settings';
import { DataService } from './data';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class SystemSettingsService {
  systemSettings = signal<ISystemSettings[]>([]);

  private dataService = inject(DataService);
  private destroyRef = inject(DestroyRef);

  loadSystemSettings() {
    this.dataService.getSystemSettings()
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe((data) => {
      this.systemSettings.update(() => data);
    });
  }

  setValue(valueKey: string) {
    return this.systemSettings().find((x) => x.key === valueKey)?.value;
  }
  
}
