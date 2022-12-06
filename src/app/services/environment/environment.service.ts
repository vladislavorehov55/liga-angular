import {Inject, Injectable, InjectionToken, Optional} from '@angular/core';
import {IEnvironment} from "../../models/environment-interface";

export const ENVIRONMENT = new InjectionToken<{ [key: string]: any }>('environment');

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  private readonly environment: IEnvironment | null | {}
  constructor(@Optional() @Inject(ENVIRONMENT) environment: IEnvironment) {
    this.environment = environment !== null ? environment : {};
  }
}
