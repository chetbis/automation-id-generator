import { InjectionToken, inject } from '@angular/core';
import { ConfigService } from '../config.service';

export const ID_PREFIX = new InjectionToken('', {
  providedIn: 'root',
  factory: () => inject(ConfigService).APP_ID.replace(/\s/g, '-'),
});
