"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegisterDTO = exports.UserLoginDTO = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class UserLoginDTO {
}
tslib_1.__decorate([
    class_validator_1.IsEmail(),
    tslib_1.__metadata("design:type", String)
], UserLoginDTO.prototype, "email", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], UserLoginDTO.prototype, "password", void 0);
exports.UserLoginDTO = UserLoginDTO;
class UserRegisterDTO {
}
tslib_1.__decorate([
    class_validator_1.IsEmail(),
    tslib_1.__metadata("design:type", String)
], UserRegisterDTO.prototype, "email", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], UserRegisterDTO.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], UserRegisterDTO.prototype, "password", void 0);
exports.UserRegisterDTO = UserRegisterDTO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC52YWxpZGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvYXV0aC9hdXRoLnZhbGlkYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFEQUFzRDtBQUV0RCxNQUFhLFlBQVk7Q0FNeEI7QUFKQztJQURDLHlCQUFPLEVBQUU7OzJDQUNXO0FBR3JCO0lBREMsNEJBQVUsRUFBRTs7OENBQ1c7QUFMMUIsb0NBTUM7QUFFRCxNQUFhLGVBQWU7Q0FTM0I7QUFQQztJQURDLHlCQUFPLEVBQUU7OzhDQUNXO0FBR3JCO0lBREMsNEJBQVUsRUFBRTs7NkNBQ087QUFHcEI7SUFEQyw0QkFBVSxFQUFFOztpREFDVztBQVIxQiwwQ0FTQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzRW1haWwsIElzTm90RW1wdHkgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5leHBvcnQgY2xhc3MgVXNlckxvZ2luRFRPIHtcbiAgQElzRW1haWwoKVxuICBwdWJsaWMgZW1haWw6IHN0cmluZztcblxuICBASXNOb3RFbXB0eSgpXG4gIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgVXNlclJlZ2lzdGVyRFRPIHtcbiAgQElzRW1haWwoKVxuICBwdWJsaWMgZW1haWw6IHN0cmluZztcblxuICBASXNOb3RFbXB0eSgpXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG5cbiAgQElzTm90RW1wdHkoKVxuICBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZztcbn1cbiJdfQ==