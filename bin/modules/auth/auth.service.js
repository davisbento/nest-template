"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const password_1 = require("../../global/helpers/password");
const user_service_1 = require("../user/user.service");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async validateUser(email, password) {
        const user = await this.userService.findByEmail(email);
        if (user && (await password_1.comparePassword(password, user.password))) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    register(model) {
        return this.userService.register(model);
    }
    login(model) {
        const payload = { sub: model.id };
        return {
            accessToken: this.jwtService.sign(payload)
        };
    }
};
AuthService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [user_service_1.UserService, jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvYXV0aC9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDJDQUE0QztBQUM1QyxxQ0FBeUM7QUFFekMsNERBQWdFO0FBRWhFLHVEQUFtRDtBQUluRCxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0lBQ3RCLFlBQTZCLFdBQXdCLEVBQVUsVUFBc0I7UUFBeEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQztJQUVsRixLQUFLLENBQUMsWUFBWSxDQUFDLEtBQWEsRUFBRSxRQUFnQjtRQUN2RCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXZELElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSwwQkFBZSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRTtZQUU1RCxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQ3JDLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxRQUFRLENBQUMsS0FBc0I7UUFDcEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sS0FBSyxDQUFDLEtBQVk7UUFDdkIsTUFBTSxPQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ2xDLE9BQU87WUFDTCxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzNDLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQXpCWSxXQUFXO0lBRHZCLG1CQUFVLEVBQUU7NkNBRStCLDBCQUFXLEVBQXNCLGdCQUFVO0dBRDFFLFdBQVcsQ0F5QnZCO0FBekJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEp3dFNlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2p3dCc7XG5cbmltcG9ydCB7IGNvbXBhcmVQYXNzd29yZCB9IGZyb20gJy4uLy4uL2dsb2JhbC9oZWxwZXJzL3Bhc3N3b3JkJztcbmltcG9ydCB7IElVc2VyIH0gZnJvbSAnLi4vLi4vZ2xvYmFsL2ludGVyZmFjZXMvdXNlcic7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uL3VzZXIvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJSZWdpc3RlckRUTyB9IGZyb20gJy4vYXV0aC52YWxpZGF0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgand0U2VydmljZTogSnd0U2VydmljZSkge31cblxuICBwdWJsaWMgYXN5bmMgdmFsaWRhdGVVc2VyKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS5maW5kQnlFbWFpbChlbWFpbCk7XG5cbiAgICBpZiAodXNlciAmJiAoYXdhaXQgY29tcGFyZVBhc3N3b3JkKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKSkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgIGNvbnN0IHsgcGFzc3dvcmQsIC4uLnJlc3VsdCB9ID0gdXNlcjtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXIobW9kZWw6IFVzZXJSZWdpc3RlckRUTykge1xuICAgIHJldHVybiB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKG1vZGVsKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dpbihtb2RlbDogSVVzZXIpIHtcbiAgICBjb25zdCBwYXlsb2FkID0geyBzdWI6IG1vZGVsLmlkIH07XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjY2Vzc1Rva2VuOiB0aGlzLmp3dFNlcnZpY2Uuc2lnbihwYXlsb2FkKVxuICAgIH07XG4gIH1cbn1cbiJdfQ==