import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { UserService } from '../services/user';
import { UserDto } from '../validation/user';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  public async create(@Body() model: UserDto) {
    return this.userService.create(model);
  }

  @Put(':id')
  public async update(@Param('id') id: number, @Body() model: UserDto) {
    return this.userService.update(id, model);
  }

  @Delete(':id')
  public async delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
