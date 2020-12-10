import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { hashPassword } from '../../global/helpers/password';
import { UserLoginDTO, UserRegisterDTO } from '../auth/auth.validation';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { UserUpdateDTO } from './user.validation';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository
  ) {}

  public findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  public async findByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ email });

    if (!user) {
      throw new HttpException('User not found', 404);
    }

    return user;
  }

  public async findById(id: number): Promise<User> {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new HttpException('User not found', 404);
    }

    return user;
  }

  public login(model: UserLoginDTO) {
    console.log(model);
  }

  public async register(model: UserRegisterDTO) {
    const user = await this.userRepository.findOne({ email: model.email });

    if (user) {
      throw new HttpException('User already exists', 409);
    }

    const hashedPassword = await hashPassword(model.password);

    const newUser = new User();
    newUser.name = model.name;
    newUser.email = model.email;
    newUser.password = hashedPassword;

    await this.userRepository.save(newUser);

    return { name: model.name, email: model.email };
  }

  public async update(id: number, model: UserUpdateDTO) {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new HttpException('User not found', 404);
    }

    const userUpdated = {
      ...user,
      ...model
    };

    await this.userRepository.save(userUpdated);

    return { ...model };
  }
}
