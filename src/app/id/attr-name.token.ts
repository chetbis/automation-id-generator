import { InjectionToken } from "@angular/core";

const ATTR_NAME_VALUE = 'data-testid';

export const ATTR_NAME = new InjectionToken('', {
    factory: () => ATTR_NAME_VALUE,
    providedIn: 'root'
});
