"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateDTO = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class UserUpdateDTO {
}
tslib_1.__decorate([
    class_validator_1.IsEmail(),
    tslib_1.__metadata("design:type", String)
], UserUpdateDTO.prototype, "email", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], UserUpdateDTO.prototype, "name", void 0);
exports.UserUpdateDTO = UserUpdateDTO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci52YWxpZGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlci91c2VyLnZhbGlkYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFEQUFzRDtBQUV0RCxNQUFhLGFBQWE7Q0FNekI7QUFKQztJQURDLHlCQUFPLEVBQUU7OzRDQUNXO0FBR3JCO0lBREMsNEJBQVUsRUFBRTs7MkNBQ087QUFMdEIsc0NBTUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc0VtYWlsLCBJc05vdEVtcHR5IH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIFVzZXJVcGRhdGVEVE8ge1xuICBASXNFbWFpbCgpXG4gIHB1YmxpYyBlbWFpbDogc3RyaW5nO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgcHVibGljIG5hbWU6IHN0cmluZztcbn1cbiJdfQ==