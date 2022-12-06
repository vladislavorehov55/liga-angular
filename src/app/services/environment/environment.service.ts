import {InjectionToken, Inject, Injectable} from '@angular/core';
import {IEnvironment} from "../../models/environment-interface";

export const ENVIRONMENT = new InjectionToken<IEnvironment>('environment');

@Injectable()
export class EnvironmentService {
  private readonly _environment: IEnvironment

  constructor(@Inject(ENVIRONMENT) _environment: IEnvironment) {
    this._environment = _environment
  }
  get environment() {
    return this._environment
  }

}
