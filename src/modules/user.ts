import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user';
import { UserService } from '../services/user';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { UserRepository } from '../repository/user';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRepository])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
