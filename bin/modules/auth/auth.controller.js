"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_validation_1 = require("./auth.validation");
const local_auth_guard_1 = require("./guards/local-auth.guard");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async create(model) {
        return this.authService.register(model);
    }
    async login(model, req) {
        return this.authService.login(req.user);
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
    common_1.UseGuards(local_auth_guard_1.LocalAuthGuard),
    common_1.Post('/login'),
    tslib_1.__param(0, common_1.Body()), tslib_1.__param(1, common_1.Request()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [auth_validation_1.UserLoginDTO, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
AuthController = tslib_1.__decorate([
    common_1.Controller('auth'),
    tslib_1.__metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvYXV0aC9hdXRoLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDJDQUE0RTtBQUU1RSxpREFBNkM7QUFDN0MsdURBQWtFO0FBQ2xFLGdFQUEyRDtBQUczRCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBQ3pCLFlBQTZCLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQztJQUdsRCxLQUFLLENBQUMsTUFBTSxDQUFTLEtBQXNCO1FBQ2hELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUlNLEtBQUssQ0FBQyxLQUFLLENBQVMsS0FBbUIsRUFBYSxHQUFRO1FBQ2pFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FDRixDQUFBO0FBVEM7SUFEQyxhQUFJLENBQUMsVUFBVSxDQUFDO0lBQ0ksbUJBQUEsYUFBSSxFQUFFLENBQUE7OzZDQUFRLGlDQUFlOzs0Q0FFakQ7QUFJRDtJQUZDLGtCQUFTLENBQUMsaUNBQWMsQ0FBQztJQUN6QixhQUFJLENBQUMsUUFBUSxDQUFDO0lBQ0ssbUJBQUEsYUFBSSxFQUFFLENBQUEsRUFBdUIsbUJBQUEsZ0JBQU8sRUFBRSxDQUFBOzs2Q0FBeEIsOEJBQVk7OzJDQUU3QztBQVpVLGNBQWM7SUFEMUIsbUJBQVUsQ0FBQyxNQUFNLENBQUM7NkNBRXlCLDBCQUFXO0dBRDFDLGNBQWMsQ0FhMUI7QUFiWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvZHksIENvbnRyb2xsZXIsIFBvc3QsIFJlcXVlc3QsIFVzZUd1YXJkcyB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyTG9naW5EVE8sIFVzZXJSZWdpc3RlckRUTyB9IGZyb20gJy4vYXV0aC52YWxpZGF0aW9uJztcbmltcG9ydCB7IExvY2FsQXV0aEd1YXJkIH0gZnJvbSAnLi9ndWFyZHMvbG9jYWwtYXV0aC5ndWFyZCc7XG5cbkBDb250cm9sbGVyKCdhdXRoJylcbmV4cG9ydCBjbGFzcyBBdXRoQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7fVxuXG4gIEBQb3N0KCdyZWdpc3RlcicpXG4gIHB1YmxpYyBhc3luYyBjcmVhdGUoQEJvZHkoKSBtb2RlbDogVXNlclJlZ2lzdGVyRFRPKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UucmVnaXN0ZXIobW9kZWwpO1xuICB9XG5cbiAgQFVzZUd1YXJkcyhMb2NhbEF1dGhHdWFyZClcbiAgQFBvc3QoJy9sb2dpbicpXG4gIHB1YmxpYyBhc3luYyBsb2dpbihAQm9keSgpIG1vZGVsOiBVc2VyTG9naW5EVE8sIEBSZXF1ZXN0KCkgcmVxOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5sb2dpbihyZXEudXNlcik7XG4gIH1cbn1cbiJdfQ==