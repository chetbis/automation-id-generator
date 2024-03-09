import { InjectionToken } from '@angular/core';

export const ID_GENERATOR = new InjectionToken('', {
  providedIn: 'root',
  factory: () => {
    return (prefix: string, id: string) => `${prefix}-${id}`;
  },
});
