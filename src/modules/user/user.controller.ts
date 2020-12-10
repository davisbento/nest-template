import { Body, Controller, Get, Param, Put, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from 'modules/auth/guards/jwt.guard';

import { UserService } from './user.service';
import { UserUpdateDTO } from './user.validation';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public async findAll() {
    return this.userService.findAll();
  }

  @Get('profile')
  public async profile(@Req() req: Request) {
    const user = req.user;
    return this.userService.findById(user.id);
  }

  @Get(':id')
  public async findOne(@Param('id') id: number) {
    return this.userService.findById(id);
  }

  @Put(':id')
  public async update(@Param('id') id: number, @Body() model: UserUpdateDTO) {
    return this.userService.update(id, model);
  }
}
