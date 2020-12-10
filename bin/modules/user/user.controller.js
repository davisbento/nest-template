"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const user_service_1 = require("./user.service");
const user_validation_1 = require("./user.validation");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async findAll() {
        return this.userService.findAll();
    }
    async profile(req) {
        const user = req.user;
        return this.userService.findById(user.id);
    }
    async findOne(id) {
        return this.userService.findById(id);
    }
    async update(id, model) {
        return this.userService.update(id, model);
    }
};
tslib_1.__decorate([
    common_1.Get(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
tslib_1.__decorate([
    common_1.Get('profile'),
    tslib_1.__param(0, common_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "profile", null);
tslib_1.__decorate([
    common_1.Get(':id'),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
tslib_1.__decorate([
    common_1.Put(':id'),
    tslib_1.__param(0, common_1.Param('id')), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, user_validation_1.UserUpdateDTO]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
UserController = tslib_1.__decorate([
    common_1.UseGuards(jwt_guard_1.JwtAuthGuard),
    common_1.Controller('user'),
    tslib_1.__metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlci91c2VyLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDJDQUFtRjtBQUVuRix3REFBNkQ7QUFFN0QsaURBQTZDO0FBQzdDLHVEQUFrRDtBQUlsRCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBQ3pCLFlBQTZCLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQztJQUdsRCxLQUFLLENBQUMsT0FBTztRQUNsQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUdNLEtBQUssQ0FBQyxPQUFPLENBQVEsR0FBWTtRQUN0QyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFHTSxLQUFLLENBQUMsT0FBTyxDQUFjLEVBQVU7UUFDMUMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBR00sS0FBSyxDQUFDLE1BQU0sQ0FBYyxFQUFVLEVBQVUsS0FBb0I7UUFDdkUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUNGLENBQUE7QUFuQkM7SUFEQyxZQUFHLEVBQUU7Ozs7NkNBR0w7QUFHRDtJQURDLFlBQUcsQ0FBQyxTQUFTLENBQUM7SUFDTyxtQkFBQSxZQUFHLEVBQUUsQ0FBQTs7Ozs2Q0FHMUI7QUFHRDtJQURDLFlBQUcsQ0FBQyxLQUFLLENBQUM7SUFDVyxtQkFBQSxjQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7Ozs7NkNBRWhDO0FBR0Q7SUFEQyxZQUFHLENBQUMsS0FBSyxDQUFDO0lBQ1UsbUJBQUEsY0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBLEVBQWMsbUJBQUEsYUFBSSxFQUFFLENBQUE7O3FEQUFRLCtCQUFhOzs0Q0FFeEU7QUF0QlUsY0FBYztJQUYxQixrQkFBUyxDQUFDLHdCQUFZLENBQUM7SUFDdkIsbUJBQVUsQ0FBQyxNQUFNLENBQUM7NkNBRXlCLDBCQUFXO0dBRDFDLGNBQWMsQ0F1QjFCO0FBdkJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9keSwgQ29udHJvbGxlciwgR2V0LCBQYXJhbSwgUHV0LCBSZXEsIFVzZUd1YXJkcyB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IEp3dEF1dGhHdWFyZCB9IGZyb20gJ21vZHVsZXMvYXV0aC9ndWFyZHMvand0Lmd1YXJkJztcblxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyVXBkYXRlRFRPIH0gZnJvbSAnLi91c2VyLnZhbGlkYXRpb24nO1xuXG5AVXNlR3VhcmRzKEp3dEF1dGhHdWFyZClcbkBDb250cm9sbGVyKCd1c2VyJylcbmV4cG9ydCBjbGFzcyBVc2VyQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxuXG4gIEBHZXQoKVxuICBwdWJsaWMgYXN5bmMgZmluZEFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy51c2VyU2VydmljZS5maW5kQWxsKCk7XG4gIH1cblxuICBAR2V0KCdwcm9maWxlJylcbiAgcHVibGljIGFzeW5jIHByb2ZpbGUoQFJlcSgpIHJlcTogUmVxdWVzdCkge1xuICAgIGNvbnN0IHVzZXIgPSByZXEudXNlcjtcbiAgICByZXR1cm4gdGhpcy51c2VyU2VydmljZS5maW5kQnlJZCh1c2VyLmlkKTtcbiAgfVxuXG4gIEBHZXQoJzppZCcpXG4gIHB1YmxpYyBhc3luYyBmaW5kT25lKEBQYXJhbSgnaWQnKSBpZDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlclNlcnZpY2UuZmluZEJ5SWQoaWQpO1xuICB9XG5cbiAgQFB1dCgnOmlkJylcbiAgcHVibGljIGFzeW5jIHVwZGF0ZShAUGFyYW0oJ2lkJykgaWQ6IG51bWJlciwgQEJvZHkoKSBtb2RlbDogVXNlclVwZGF0ZURUTykge1xuICAgIHJldHVybiB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZShpZCwgbW9kZWwpO1xuICB9XG59XG4iXX0=