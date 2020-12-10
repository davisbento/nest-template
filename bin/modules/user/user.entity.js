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
    typeorm_1.Entity()
], User);
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5lbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy91c2VyL3VzZXIuZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxxQ0FBaUU7QUFHakUsSUFBYSxJQUFJLEdBQWpCLE1BQWEsSUFBSTtDQVloQixDQUFBO0FBVkM7SUFEQyxnQ0FBc0IsRUFBRTs7Z0NBQ1A7QUFHbEI7SUFEQyxnQkFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDOztrQ0FDSjtBQUdwQjtJQURDLGdCQUFNLEVBQUU7O3NDQUNlO0FBR3hCO0lBREMsZ0JBQU0sQ0FBQyxTQUFTLENBQUM7O21DQUNHO0FBWFYsSUFBSTtJQURoQixnQkFBTSxFQUFFO0dBQ0ksSUFBSSxDQVloQjtBQVpZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uLCBFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tICd0eXBlb3JtJztcblxuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgVXNlciB7XG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgcHVibGljIGlkOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IGxlbmd0aDogNTAwIH0pXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG5cbiAgQENvbHVtbigpXG4gIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nO1xuXG4gIEBDb2x1bW4oJ3ZhcmNoYXInKVxuICBwdWJsaWMgZW1haWw6IHN0cmluZztcbn1cbiJdfQ==