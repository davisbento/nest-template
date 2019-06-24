import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user';
import { UserService } from '../services/user';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
