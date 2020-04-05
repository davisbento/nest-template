import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from '../entity/user.entity';
import { UserRepository } from '../repository/user';
import { UserDto } from '../validation/user';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository
  ) {}

  public findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  public async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new HttpException('User not found', 404);
    }

    return user;
  }

  public create(model: UserDto): Promise<User> {
    return this.userRepository.save(model);
  }

  public async delete(id: number): Promise<User> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new HttpException('User not found', 404);
    }

    return this.userRepository.remove(user);
  }

  public async update(id: number, model: UserDto): Promise<User> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new HttpException('User not found', 404);
    }

    const userUpdated = {
      ...user,
      ...model
    };

    return this.userRepository.save(userUpdated);
  }
}
