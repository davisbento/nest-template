import { Module } from '@nestjs/common';
import { UserModule } from './user';
import { DatabaseConfig } from '../config/database';

@Module({
  imports: [DatabaseConfig, UserModule],
})
export class AppModule {}
