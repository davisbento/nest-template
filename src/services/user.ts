import { Injectable, HttpException } from '@nestjs/common';
import { UserDto } from '../validation/user';
import { User } from '../entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
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
    try {
      return this.userRepository.save(model);
    } catch (err) {
      throw new HttpException(err.message, 500);
    }
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

    console.log(userUpdated);

    return this.userRepository.save(userUpdated);
  }
}
