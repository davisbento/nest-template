import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DBHOST'),
        port: configService.get<number>('DBPORT'),
        username: configService.get<string>('DBUSER'),
        password: configService.get<string>('DBPASSWORD'),
        database: configService.get<string>('DBNAME'),
        entities: [__dirname + '/../**/**.entity{.ts,.js}'],
        synchronize: true,
        logging: true
      })
    })
  ]
})
export class DatabaseConfig {}
