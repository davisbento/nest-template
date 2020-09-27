import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseConfig } from '../config/database';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, expandVariables: true }), DatabaseConfig, UserModule]
})
export class AppModule {}
