import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpException,
  Put,
} from '@nestjs/common';
import { UserService } from '../services/user';
import { UserDto } from '../validation/user';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    return await this.userService.findOne(id);
  }

  @Post()
  async create(@Body() model: UserDto) {
    return await this.userService.create(model);
  }

  @Put(':id')
  async update(@Param('id') id, @Body() model: UserDto) {
    return await this.userService.update(id, model);
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    return await this.userService.delete(id);
  }
}
