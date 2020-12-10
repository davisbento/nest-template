"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const user_module_1 = require("../user/user.module");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const jwt_strategy_1 = require("./strategies/jwt.strategy");
const local_strategy_1 = require("./strategies/local.strategy");
let AuthModule = class AuthModule {
};
AuthModule = tslib_1.__decorate([
    common_1.Module({
        imports: [
            user_module_1.UserModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.registerAsync({
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    secret: await configService.get('SECRET_KEY'),
                    signOptions: { expiresIn: '60m' }
                })
            })
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9hdXRoL2F1dGgubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSwyQ0FBd0M7QUFDeEMsMkNBQStDO0FBQy9DLHFDQUF3QztBQUN4QywrQ0FBa0Q7QUFFbEQscURBQWlEO0FBQ2pELHVEQUFtRDtBQUNuRCxpREFBNkM7QUFDN0MsNERBQXdEO0FBQ3hELGdFQUE0RDtBQWlCNUQsSUFBYSxVQUFVLEdBQXZCLE1BQWEsVUFBVTtDQUFHLENBQUE7QUFBYixVQUFVO0lBZnRCLGVBQU0sQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNQLHdCQUFVO1lBQ1YseUJBQWM7WUFDZCxlQUFTLENBQUMsYUFBYSxDQUFDO2dCQUN0QixNQUFNLEVBQUUsQ0FBQyxzQkFBYSxDQUFDO2dCQUN2QixVQUFVLEVBQUUsS0FBSyxFQUFFLGFBQTRCLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ25ELE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQyxHQUFHLENBQVMsWUFBWSxDQUFDO29CQUNyRCxXQUFXLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFO2lCQUNsQyxDQUFDO2FBQ0gsQ0FBQztTQUNIO1FBQ0QsV0FBVyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztRQUM3QixTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLDhCQUFhLEVBQUUsMEJBQVcsQ0FBQztLQUNyRCxDQUFDO0dBQ1csVUFBVSxDQUFHO0FBQWIsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgSnd0TW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9qd3QnO1xuaW1wb3J0IHsgUGFzc3BvcnRNb2R1bGUgfSBmcm9tICdAbmVzdGpzL3Bhc3Nwb3J0JztcblxuaW1wb3J0IHsgVXNlck1vZHVsZSB9IGZyb20gJy4uL3VzZXIvdXNlci5tb2R1bGUnO1xuaW1wb3J0IHsgQXV0aENvbnRyb2xsZXIgfSBmcm9tICcuL2F1dGguY29udHJvbGxlcic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEp3dFN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVnaWVzL2p3dC5zdHJhdGVneSc7XG5pbXBvcnQgeyBMb2NhbFN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVnaWVzL2xvY2FsLnN0cmF0ZWd5JztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBVc2VyTW9kdWxlLFxuICAgIFBhc3Nwb3J0TW9kdWxlLFxuICAgIEp3dE1vZHVsZS5yZWdpc3RlckFzeW5jKHtcbiAgICAgIGluamVjdDogW0NvbmZpZ1NlcnZpY2VdLFxuICAgICAgdXNlRmFjdG9yeTogYXN5bmMgKGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpID0+ICh7XG4gICAgICAgIHNlY3JldDogYXdhaXQgY29uZmlnU2VydmljZS5nZXQ8c3RyaW5nPignU0VDUkVUX0tFWScpLFxuICAgICAgICBzaWduT3B0aW9uczogeyBleHBpcmVzSW46ICc2MG0nIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgXSxcbiAgY29udHJvbGxlcnM6IFtBdXRoQ29udHJvbGxlcl0sXG4gIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlLCBMb2NhbFN0cmF0ZWd5LCBKd3RTdHJhdGVneV1cbn0pXG5leHBvcnQgY2xhc3MgQXV0aE1vZHVsZSB7fVxuIl19