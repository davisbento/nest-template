"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_validation_1 = require("./user.validation");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async findAll() {
        return this.userService.findAll();
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
    common_1.Controller('user'),
    tslib_1.__metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlci91c2VyLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDJDQUFtRTtBQUVuRSxpREFBNkM7QUFDN0MsdURBQWtEO0FBR2xELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFDekIsWUFBNkIsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDO0lBR2xELEtBQUssQ0FBQyxPQUFPO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBR00sS0FBSyxDQUFDLE9BQU8sQ0FBYyxFQUFVO1FBQzFDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUdNLEtBQUssQ0FBQyxNQUFNLENBQWMsRUFBVSxFQUFVLEtBQW9CO1FBQ3ZFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDRixDQUFBO0FBYkM7SUFEQyxZQUFHLEVBQUU7Ozs7NkNBR0w7QUFHRDtJQURDLFlBQUcsQ0FBQyxLQUFLLENBQUM7SUFDVyxtQkFBQSxjQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7Ozs7NkNBRWhDO0FBR0Q7SUFEQyxZQUFHLENBQUMsS0FBSyxDQUFDO0lBQ1UsbUJBQUEsY0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBLEVBQWMsbUJBQUEsYUFBSSxFQUFFLENBQUE7O3FEQUFRLCtCQUFhOzs0Q0FFeEU7QUFoQlUsY0FBYztJQUQxQixtQkFBVSxDQUFDLE1BQU0sQ0FBQzs2Q0FFeUIsMEJBQVc7R0FEMUMsY0FBYyxDQWlCMUI7QUFqQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb2R5LCBDb250cm9sbGVyLCBHZXQsIFBhcmFtLCBQdXQgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclVwZGF0ZURUTyB9IGZyb20gJy4vdXNlci52YWxpZGF0aW9uJztcblxuQENvbnRyb2xsZXIoJ3VzZXInKVxuZXhwb3J0IGNsYXNzIFVzZXJDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHt9XG5cbiAgQEdldCgpXG4gIHB1YmxpYyBhc3luYyBmaW5kQWxsKCkge1xuICAgIHJldHVybiB0aGlzLnVzZXJTZXJ2aWNlLmZpbmRBbGwoKTtcbiAgfVxuXG4gIEBHZXQoJzppZCcpXG4gIHB1YmxpYyBhc3luYyBmaW5kT25lKEBQYXJhbSgnaWQnKSBpZDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlclNlcnZpY2UuZmluZEJ5SWQoaWQpO1xuICB9XG5cbiAgQFB1dCgnOmlkJylcbiAgcHVibGljIGFzeW5jIHVwZGF0ZShAUGFyYW0oJ2lkJykgaWQ6IG51bWJlciwgQEJvZHkoKSBtb2RlbDogVXNlclVwZGF0ZURUTykge1xuICAgIHJldHVybiB0aGlzLnVzZXJTZXJ2aWNlLnVwZGF0ZShpZCwgbW9kZWwpO1xuICB9XG59XG4iXX0=