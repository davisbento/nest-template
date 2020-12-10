"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
let AuthService = class AuthService {
    constructor(userService) {
        this.userService = userService;
    }
    register(model) {
        return this.userService.register(model);
    }
    login(model) {
        return this.userService.login(model);
    }
};
AuthService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [user_service_1.UserService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvYXV0aC9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDJDQUE0QztBQUU1Qyx1REFBbUQ7QUFJbkQsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztJQUN0QixZQUE2QixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7SUFFbEQsUUFBUSxDQUFDLEtBQXNCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLEtBQUssQ0FBQyxLQUFtQjtRQUM5QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRixDQUFBO0FBVlksV0FBVztJQUR2QixtQkFBVSxFQUFFOzZDQUUrQiwwQkFBVztHQUQxQyxXQUFXLENBVXZCO0FBVlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uL3VzZXIvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJMb2dpbkRUTywgVXNlclJlZ2lzdGVyRFRPIH0gZnJvbSAnLi9hdXRoLnZhbGlkYXRpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge31cblxuICBwdWJsaWMgcmVnaXN0ZXIobW9kZWw6IFVzZXJSZWdpc3RlckRUTykge1xuICAgIHJldHVybiB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKG1vZGVsKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dpbihtb2RlbDogVXNlckxvZ2luRFRPKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlclNlcnZpY2UubG9naW4obW9kZWwpO1xuICB9XG59XG4iXX0=