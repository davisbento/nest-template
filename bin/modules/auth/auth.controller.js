"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_validation_1 = require("./auth.validation");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async create(model) {
        return this.authService.register(model);
    }
    async login(model) {
        return this.authService.login(model);
    }
};
tslib_1.__decorate([
    common_1.Post('register'),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [auth_validation_1.UserRegisterDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "create", null);
tslib_1.__decorate([
    common_1.Post('login'),
    tslib_1.__param(0, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [auth_validation_1.UserLoginDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
AuthController = tslib_1.__decorate([
    common_1.Controller('auth'),
    tslib_1.__metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvYXV0aC9hdXRoLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDJDQUF3RDtBQUV4RCxpREFBNkM7QUFDN0MsdURBQWtFO0FBR2xFLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFDekIsWUFBNkIsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDO0lBR2xELEtBQUssQ0FBQyxNQUFNLENBQVMsS0FBc0I7UUFDaEQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBR00sS0FBSyxDQUFDLEtBQUssQ0FBUyxLQUFtQjtRQUM1QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRixDQUFBO0FBUkM7SUFEQyxhQUFJLENBQUMsVUFBVSxDQUFDO0lBQ0ksbUJBQUEsYUFBSSxFQUFFLENBQUE7OzZDQUFRLGlDQUFlOzs0Q0FFakQ7QUFHRDtJQURDLGFBQUksQ0FBQyxPQUFPLENBQUM7SUFDTSxtQkFBQSxhQUFJLEVBQUUsQ0FBQTs7NkNBQVEsOEJBQVk7OzJDQUU3QztBQVhVLGNBQWM7SUFEMUIsbUJBQVUsQ0FBQyxNQUFNLENBQUM7NkNBRXlCLDBCQUFXO0dBRDFDLGNBQWMsQ0FZMUI7QUFaWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvZHksIENvbnRyb2xsZXIsIFBvc3QgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckxvZ2luRFRPLCBVc2VyUmVnaXN0ZXJEVE8gfSBmcm9tICcuL2F1dGgudmFsaWRhdGlvbic7XG5cbkBDb250cm9sbGVyKCdhdXRoJylcbmV4cG9ydCBjbGFzcyBBdXRoQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7fVxuXG4gIEBQb3N0KCdyZWdpc3RlcicpXG4gIHB1YmxpYyBhc3luYyBjcmVhdGUoQEJvZHkoKSBtb2RlbDogVXNlclJlZ2lzdGVyRFRPKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UucmVnaXN0ZXIobW9kZWwpO1xuICB9XG5cbiAgQFBvc3QoJ2xvZ2luJylcbiAgcHVibGljIGFzeW5jIGxvZ2luKEBCb2R5KCkgbW9kZWw6IFVzZXJMb2dpbkRUTykge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKG1vZGVsKTtcbiAgfVxufVxuIl19