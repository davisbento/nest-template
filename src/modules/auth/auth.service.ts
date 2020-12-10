import { Injectable } from '@nestjs/common';

import { UserService } from '../user/user.service';
import { UserLoginDTO, UserRegisterDTO } from './auth.validation';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  public register(model: UserRegisterDTO) {
    return this.userService.register(model);
  }

  public login(model: UserLoginDTO) {
    return this.userService.login(model);
  }
}
