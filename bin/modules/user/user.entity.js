"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
let User = class User {
    generateUuid() {
        this.uuid = uuid_1.v4();
    }
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ length: 500 }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "uuid", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ length: 500 }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    typeorm_1.Column('varchar'),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], User.prototype, "generateUuid", null);
User = tslib_1.__decorate([
    typeorm_1.Entity('users')
], User);
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5lbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy91c2VyL3VzZXIuZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxxQ0FBK0U7QUFDL0UsK0JBQTBCO0FBRzFCLElBQWEsSUFBSSxHQUFqQixNQUFhLElBQUk7SUFpQlIsWUFBWTtRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQUUsRUFBRSxDQUFDO0lBQ25CLENBQUM7Q0FDRixDQUFBO0FBbEJDO0lBREMsZ0NBQXNCLEVBQUU7O2dDQUNQO0FBR2xCO0lBREMsZ0JBQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQzs7a0NBQ0o7QUFHcEI7SUFEQyxnQkFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDOztrQ0FDSjtBQUdwQjtJQURDLGdCQUFNLEVBQUU7O3NDQUNlO0FBR3hCO0lBREMsZ0JBQU0sQ0FBQyxTQUFTLENBQUM7O21DQUNHO0FBR3JCO0lBREMsc0JBQVksRUFBRTs7Ozt3Q0FHZDtBQW5CVSxJQUFJO0lBRGhCLGdCQUFNLENBQUMsT0FBTyxDQUFDO0dBQ0gsSUFBSSxDQW9CaEI7QUFwQlksb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWZvcmVJbnNlcnQsIENvbHVtbiwgRW50aXR5LCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uIH0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xuXG5ARW50aXR5KCd1c2VycycpXG5leHBvcnQgY2xhc3MgVXNlciB7XG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgcHVibGljIGlkOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IGxlbmd0aDogNTAwIH0pXG4gIHB1YmxpYyB1dWlkOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IGxlbmd0aDogNTAwIH0pXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG5cbiAgQENvbHVtbigpXG4gIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nO1xuXG4gIEBDb2x1bW4oJ3ZhcmNoYXInKVxuICBwdWJsaWMgZW1haWw6IHN0cmluZztcblxuICBAQmVmb3JlSW5zZXJ0KClcbiAgcHVibGljIGdlbmVyYXRlVXVpZCgpIHtcbiAgICB0aGlzLnV1aWQgPSB2NCgpO1xuICB9XG59XG4iXX0=