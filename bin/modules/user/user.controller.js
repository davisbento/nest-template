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
        return this.userService.findOne(id);
    }
    async update(id, model) {
        return this.userService.update(id, model);
    }
    async delete(id) {
        return this.userService.delete(id);
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
tslib_1.__decorate([
    common_1.Delete(':id'),
    tslib_1.__param(0, common_1.Param('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
UserController = tslib_1.__decorate([
    common_1.Controller('user'),
    tslib_1.__metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlci91c2VyLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDJDQUEyRTtBQUUzRSxpREFBNkM7QUFDN0MsdURBQWtEO0FBR2xELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFDekIsWUFBNkIsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDO0lBR2xELEtBQUssQ0FBQyxPQUFPO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBR00sS0FBSyxDQUFDLE9BQU8sQ0FBYyxFQUFVO1FBQzFDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUdNLEtBQUssQ0FBQyxNQUFNLENBQWMsRUFBVSxFQUFVLEtBQW9CO1FBQ3ZFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFHTSxLQUFLLENBQUMsTUFBTSxDQUFjLEVBQVU7UUFDekMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0NBQ0YsQ0FBQTtBQWxCQztJQURDLFlBQUcsRUFBRTs7Ozs2Q0FHTDtBQUdEO0lBREMsWUFBRyxDQUFDLEtBQUssQ0FBQztJQUNXLG1CQUFBLGNBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTs7Ozs2Q0FFaEM7QUFHRDtJQURDLFlBQUcsQ0FBQyxLQUFLLENBQUM7SUFDVSxtQkFBQSxjQUFLLENBQUMsSUFBSSxDQUFDLENBQUEsRUFBYyxtQkFBQSxhQUFJLEVBQUUsQ0FBQTs7cURBQVEsK0JBQWE7OzRDQUV4RTtBQUdEO0lBREMsZUFBTSxDQUFDLEtBQUssQ0FBQztJQUNPLG1CQUFBLGNBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTs7Ozs0Q0FFL0I7QUFyQlUsY0FBYztJQUQxQixtQkFBVSxDQUFDLE1BQU0sQ0FBQzs2Q0FFeUIsMEJBQVc7R0FEMUMsY0FBYyxDQXNCMUI7QUF0Qlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb2R5LCBDb250cm9sbGVyLCBEZWxldGUsIEdldCwgUGFyYW0sIFB1dCB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyVXBkYXRlRFRPIH0gZnJvbSAnLi91c2VyLnZhbGlkYXRpb24nO1xuXG5AQ29udHJvbGxlcigndXNlcicpXG5leHBvcnQgY2xhc3MgVXNlckNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge31cblxuICBAR2V0KClcbiAgcHVibGljIGFzeW5jIGZpbmRBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlclNlcnZpY2UuZmluZEFsbCgpO1xuICB9XG5cbiAgQEdldCgnOmlkJylcbiAgcHVibGljIGFzeW5jIGZpbmRPbmUoQFBhcmFtKCdpZCcpIGlkOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy51c2VyU2VydmljZS5maW5kT25lKGlkKTtcbiAgfVxuXG4gIEBQdXQoJzppZCcpXG4gIHB1YmxpYyBhc3luYyB1cGRhdGUoQFBhcmFtKCdpZCcpIGlkOiBudW1iZXIsIEBCb2R5KCkgbW9kZWw6IFVzZXJVcGRhdGVEVE8pIHtcbiAgICByZXR1cm4gdGhpcy51c2VyU2VydmljZS51cGRhdGUoaWQsIG1vZGVsKTtcbiAgfVxuXG4gIEBEZWxldGUoJzppZCcpXG4gIHB1YmxpYyBhc3luYyBkZWxldGUoQFBhcmFtKCdpZCcpIGlkOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy51c2VyU2VydmljZS5kZWxldGUoaWQpO1xuICB9XG59XG4iXX0=