import { Service } from "./rx-state/core-service";

export interface IUserServiceState {}

export class UserService extends Service<IUserServiceState> {
  constructor() {
    super({});
  }
}
