import { Module } from '@nestjs/common';
import { UserModule } from './user';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PGHOST,
      port: Number(process.env.PGPORT),
      username: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
      entities: [__dirname + '/../**/**.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
