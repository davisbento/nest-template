import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { comparePassword } from '../../global/helpers/password';
import { IUser } from '../../global/interfaces/user';
import { UserService } from '../user/user.service';
import { UserRegisterDTO } from './auth.validation';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private jwtService: JwtService) {}

  public async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (user && (await comparePassword(password, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  public register(model: UserRegisterDTO) {
    return this.userService.register(model);
  }

  public login(model: IUser) {
    const payload = { name: model.name, sub: model.id };
    return {
      accessToken: this.jwtService.sign(payload)
    };
  }
}
