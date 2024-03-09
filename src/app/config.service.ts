import { Injectable } from "@angular/core";

const APP_ID = 'test app';

@Injectable({ providedIn: 'root' })
export class ConfigService {
    get APP_ID() {
        return APP_ID;
    }
}
