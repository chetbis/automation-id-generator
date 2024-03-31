import { InjectionToken } from '@angular/core';

export const INTERFACE_TOKEN = new InjectionToken<GetComponentSelector>(
  'InterfaceToken'
);

export interface GetComponentSelector {
  getSelector(): string;
}
