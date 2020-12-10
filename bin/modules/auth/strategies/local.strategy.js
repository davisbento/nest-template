"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStrategy = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_local_1 = require("passport-local");
const auth_service_1 = require("../auth.service");
let LocalStrategy = class LocalStrategy extends passport_1.PassportStrategy(passport_local_1.Strategy) {
    constructor(authService) {
        super({
            usernameField: 'email',
            passReqToCallback: true
        });
        this.authService = authService;
    }
    async validate(req, email, password) {
        const user = await this.authService.validateUser(email, password);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
};
LocalStrategy = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [auth_service_1.AuthService])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwuc3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9hdXRoL3N0cmF0ZWdpZXMvbG9jYWwuc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDJDQUFtRTtBQUNuRSwrQ0FBb0Q7QUFDcEQsbURBQTBDO0FBRTFDLGtEQUE4QztBQUc5QyxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFjLFNBQVEsMkJBQWdCLENBQUMseUJBQVEsQ0FBQztJQUMzRCxZQUFvQixXQUF3QjtRQUMxQyxLQUFLLENBQUM7WUFDSixhQUFhLEVBQUUsT0FBTztZQUN0QixpQkFBaUIsRUFBRSxJQUFJO1NBQ3hCLENBQUMsQ0FBQztRQUplLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBSzVDLENBQUM7SUFFTSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQVEsRUFBRSxLQUFhLEVBQUUsUUFBZ0I7UUFDN0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE1BQU0sSUFBSSw4QkFBcUIsRUFBRSxDQUFDO1NBQ25DO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0YsQ0FBQTtBQWZZLGFBQWE7SUFEekIsbUJBQVUsRUFBRTs2Q0FFc0IsMEJBQVc7R0FEakMsYUFBYSxDQWV6QjtBQWZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVW5hdXRob3JpemVkRXhjZXB0aW9uIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgUGFzc3BvcnRTdHJhdGVneSB9IGZyb20gJ0BuZXN0anMvcGFzc3BvcnQnO1xuaW1wb3J0IHsgU3RyYXRlZ3kgfSBmcm9tICdwYXNzcG9ydC1sb2NhbCc7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU3RyYXRlZ3kgZXh0ZW5kcyBQYXNzcG9ydFN0cmF0ZWd5KFN0cmF0ZWd5KSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XG4gICAgc3VwZXIoe1xuICAgICAgdXNlcm5hbWVGaWVsZDogJ2VtYWlsJyxcbiAgICAgIHBhc3NSZXFUb0NhbGxiYWNrOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgdmFsaWRhdGUocmVxOiBhbnksIGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5hdXRoU2VydmljZS52YWxpZGF0ZVVzZXIoZW1haWwsIHBhc3N3b3JkKTtcbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHRocm93IG5ldyBVbmF1dGhvcml6ZWRFeGNlcHRpb24oKTtcbiAgICB9XG4gICAgcmV0dXJuIHVzZXI7XG4gIH1cbn1cbiJdfQ==