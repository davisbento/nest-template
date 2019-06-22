import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from '../services/user';
import { CreateUserDto } from '../validation/user';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello() {
    return this.userService.getHello();
  }

  @Post()
  async create(@Body() model: CreateUserDto) {
    return await this.userService.createUser(model);
  }
}
