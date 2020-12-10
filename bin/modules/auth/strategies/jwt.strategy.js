"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
let JwtStrategy = class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy) {
    constructor(configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('SECRET_KEY')
        });
        this.configService = configService;
    }
    async validate(payload) {
        return { id: payload.sub, email: payload.email };
    }
};
JwtStrategy = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [config_1.ConfigService])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LnN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvYXV0aC9zdHJhdGVnaWVzL2p3dC5zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsMkNBQTRDO0FBQzVDLDJDQUErQztBQUMvQywrQ0FBb0Q7QUFDcEQsK0NBQW9EO0FBS3BELElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVksU0FBUSwyQkFBZ0IsQ0FBQyx1QkFBUSxDQUFDO0lBQ3pELFlBQW1CLGFBQTRCO1FBQzdDLEtBQUssQ0FBQztZQUNKLGNBQWMsRUFBRSx5QkFBVSxDQUFDLDJCQUEyQixFQUFFO1lBQ3hELGdCQUFnQixFQUFFLEtBQUs7WUFDdkIsV0FBVyxFQUFFLGFBQWEsQ0FBQyxHQUFHLENBQVMsWUFBWSxDQUFDO1NBQ3JELENBQUMsQ0FBQztRQUxjLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBTS9DLENBQUM7SUFFTSxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQVk7UUFDaEMsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkQsQ0FBQztDQUNGLENBQUE7QUFaWSxXQUFXO0lBRHZCLG1CQUFVLEVBQUU7NkNBRXVCLHNCQUFhO0dBRHBDLFdBQVcsQ0FZdkI7QUFaWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgUGFzc3BvcnRTdHJhdGVneSB9IGZyb20gJ0BuZXN0anMvcGFzc3BvcnQnO1xuaW1wb3J0IHsgRXh0cmFjdEp3dCwgU3RyYXRlZ3kgfSBmcm9tICdwYXNzcG9ydC1qd3QnO1xuXG5pbXBvcnQgeyBJVXNlclJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwvaW50ZXJmYWNlcy91c2VyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEp3dFN0cmF0ZWd5IGV4dGVuZHMgUGFzc3BvcnRTdHJhdGVneShTdHJhdGVneSkge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSkge1xuICAgIHN1cGVyKHtcbiAgICAgIGp3dEZyb21SZXF1ZXN0OiBFeHRyYWN0Snd0LmZyb21BdXRoSGVhZGVyQXNCZWFyZXJUb2tlbigpLFxuICAgICAgaWdub3JlRXhwaXJhdGlvbjogZmFsc2UsXG4gICAgICBzZWNyZXRPcktleTogY29uZmlnU2VydmljZS5nZXQ8c3RyaW5nPignU0VDUkVUX0tFWScpXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgdmFsaWRhdGUocGF5bG9hZDogYW55KTogUHJvbWlzZTxJVXNlclJlcXVlc3Q+IHtcbiAgICByZXR1cm4geyBpZDogcGF5bG9hZC5zdWIsIGVtYWlsOiBwYXlsb2FkLmVtYWlsIH07XG4gIH1cbn1cbiJdfQ==