import { Module } from '@nestjs/common';

import { DatabaseConfig } from '../config/database';
import { UserModule } from './user';

@Module({
  imports: [DatabaseConfig, UserModule]
})
export class AppModule {}
