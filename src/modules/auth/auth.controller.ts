import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { UserLoginDTO, UserRegisterDTO } from './auth.validation';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  public async create(@Body() model: UserRegisterDTO) {
    return this.authService.register(model);
  }

  @Post('login')
  public async login(@Body() model: UserLoginDTO) {
    return this.authService.login(model);
  }
}
