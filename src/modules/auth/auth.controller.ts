import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';
import { UserLoginDTO, UserRegisterDTO } from './auth.validation';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  public async create(@Body() model: UserRegisterDTO) {
    return this.authService.register(model);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  public async login(@Body() model: UserLoginDTO, @Request() req: any) {
    return this.authService.login(req.user);
  }
}
