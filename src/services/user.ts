import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/validation/user';

function sleep(time: number) {
  return new Promise(resolve => setTimeout(resolve, time));
}

@Injectable()
export class UserService {
  getHello(): any {
    return {
      message: 'Hello world',
    };
  }

  async createUser(
    model: CreateUserDto,
  ): Promise<{ message: string; data: CreateUserDto }> {
    await sleep(3000);

    return {
      message: 'User created',
      data: model,
    };
  }
}
