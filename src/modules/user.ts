import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from '../controllers/user';
import { User } from '../entity/user.entity';
import { UserRepository } from '../repository/user';
import { UserService } from '../services/user';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRepository])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
