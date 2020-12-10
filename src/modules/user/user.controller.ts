import { Body, Controller, Get, Param, Put } from '@nestjs/common';

import { UserService } from './user.service';
import { UserUpdateDTO } from './user.validation';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public async findAll() {
    return this.userService.findAll();
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
