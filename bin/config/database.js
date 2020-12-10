"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConfig = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
let DatabaseConfig = class DatabaseConfig {
};
DatabaseConfig = tslib_1.__decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('DBHOST'),
                    port: configService.get('DBPORT'),
                    username: configService.get('DBUSER'),
                    password: configService.get('DBPASSWORD'),
                    database: configService.get('DBNAME'),
                    entities: [__dirname + '/../**/**.entity{.ts,.js}'],
                    synchronize: true,
                    logging: true
                })
            })
        ]
    })
], DatabaseConfig);
exports.DatabaseConfig = DatabaseConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2RhdGFiYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSwyQ0FBd0M7QUFDeEMsMkNBQStDO0FBQy9DLDZDQUFnRDtBQW9CaEQsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztDQUFHLENBQUE7QUFBakIsY0FBYztJQWxCMUIsZUFBTSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ1AsdUJBQWEsQ0FBQyxZQUFZLENBQUM7Z0JBQ3pCLE1BQU0sRUFBRSxDQUFDLHNCQUFhLENBQUM7Z0JBQ3ZCLFVBQVUsRUFBRSxDQUFDLGFBQTRCLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQzdDLElBQUksRUFBRSxVQUFVO29CQUNoQixJQUFJLEVBQUUsYUFBYSxDQUFDLEdBQUcsQ0FBUyxRQUFRLENBQUM7b0JBQ3pDLElBQUksRUFBRSxhQUFhLENBQUMsR0FBRyxDQUFTLFFBQVEsQ0FBQztvQkFDekMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxHQUFHLENBQVMsUUFBUSxDQUFDO29CQUM3QyxRQUFRLEVBQUUsYUFBYSxDQUFDLEdBQUcsQ0FBUyxZQUFZLENBQUM7b0JBQ2pELFFBQVEsRUFBRSxhQUFhLENBQUMsR0FBRyxDQUFTLFFBQVEsQ0FBQztvQkFDN0MsUUFBUSxFQUFFLENBQUMsU0FBUyxHQUFHLDJCQUEyQixDQUFDO29CQUNuRCxXQUFXLEVBQUUsSUFBSTtvQkFDakIsT0FBTyxFQUFFLElBQUk7aUJBQ2QsQ0FBQzthQUNILENBQUM7U0FDSDtLQUNGLENBQUM7R0FDVyxjQUFjLENBQUc7QUFBakIsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgVHlwZU9ybU1vZHVsZSB9IGZyb20gJ0BuZXN0anMvdHlwZW9ybSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgVHlwZU9ybU1vZHVsZS5mb3JSb290QXN5bmMoe1xuICAgICAgaW5qZWN0OiBbQ29uZmlnU2VydmljZV0sXG4gICAgICB1c2VGYWN0b3J5OiAoY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSkgPT4gKHtcbiAgICAgICAgdHlwZTogJ3Bvc3RncmVzJyxcbiAgICAgICAgaG9zdDogY29uZmlnU2VydmljZS5nZXQ8c3RyaW5nPignREJIT1NUJyksXG4gICAgICAgIHBvcnQ6IGNvbmZpZ1NlcnZpY2UuZ2V0PG51bWJlcj4oJ0RCUE9SVCcpLFxuICAgICAgICB1c2VybmFtZTogY29uZmlnU2VydmljZS5nZXQ8c3RyaW5nPignREJVU0VSJyksXG4gICAgICAgIHBhc3N3b3JkOiBjb25maWdTZXJ2aWNlLmdldDxzdHJpbmc+KCdEQlBBU1NXT1JEJyksXG4gICAgICAgIGRhdGFiYXNlOiBjb25maWdTZXJ2aWNlLmdldDxzdHJpbmc+KCdEQk5BTUUnKSxcbiAgICAgICAgZW50aXRpZXM6IFtfX2Rpcm5hbWUgKyAnLy4uLyoqLyoqLmVudGl0eXsudHMsLmpzfSddLFxuICAgICAgICBzeW5jaHJvbml6ZTogdHJ1ZSxcbiAgICAgICAgbG9nZ2luZzogdHJ1ZVxuICAgICAgfSlcbiAgICB9KVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhdGFiYXNlQ29uZmlnIHt9XG4iXX0=