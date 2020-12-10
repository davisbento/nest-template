"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
let User = class User {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id", void 0);
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
User = tslib_1.__decorate([
    typeorm_1.Entity('users')
], User);
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5lbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy91c2VyL3VzZXIuZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxxQ0FBaUU7QUFHakUsSUFBYSxJQUFJLEdBQWpCLE1BQWEsSUFBSTtDQVloQixDQUFBO0FBVkM7SUFEQyxnQ0FBc0IsRUFBRTs7Z0NBQ1A7QUFHbEI7SUFEQyxnQkFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDOztrQ0FDSjtBQUdwQjtJQURDLGdCQUFNLEVBQUU7O3NDQUNlO0FBR3hCO0lBREMsZ0JBQU0sQ0FBQyxTQUFTLENBQUM7O21DQUNHO0FBWFYsSUFBSTtJQURoQixnQkFBTSxDQUFDLE9BQU8sQ0FBQztHQUNILElBQUksQ0FZaEI7QUFaWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbiwgRW50aXR5LCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uIH0gZnJvbSAndHlwZW9ybSc7XG5cbkBFbnRpdHkoJ3VzZXJzJylcbmV4cG9ydCBjbGFzcyBVc2VyIHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICBwdWJsaWMgaWQ6IG51bWJlcjtcblxuICBAQ29sdW1uKHsgbGVuZ3RoOiA1MDAgfSlcbiAgcHVibGljIG5hbWU6IHN0cmluZztcblxuICBAQ29sdW1uKClcbiAgcHVibGljIHBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgQENvbHVtbigndmFyY2hhcicpXG4gIHB1YmxpYyBlbWFpbDogc3RyaW5nO1xufVxuIl19