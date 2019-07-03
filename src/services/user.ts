import { Injectable, HttpException } from '@nestjs/common';
import { UserDto } from '../validation/user';
import { User } from '../entity/user.entity';
import { UserRepository } from '../repository/user';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id): Promise<User> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new HttpException('User not found', 404);
    }

    return user;
  }

  create(model: UserDto): Promise<User> {
    return this.userRepository.save(model);
  }

  async delete(id): Promise<User> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new HttpException('User not found', 404);
    }

    return this.userRepository.remove(user);
  }

  async update(id, model: UserDto): Promise<User> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new HttpException('User not found', 404);
    }

    const userUpdated = {
      ...user,
      ...model,
    };

    return this.userRepository.save(userUpdated);
  }
}
