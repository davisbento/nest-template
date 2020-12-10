"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BearerGuard = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
let BearerGuard = class BearerGuard extends passport_1.AuthGuard('bearer') {
};
BearerGuard = tslib_1.__decorate([
    common_1.Injectable()
], BearerGuard);
exports.BearerGuard = BearerGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVhcmVyLmd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvYXV0aC9ndWFyZHMvYmVhcmVyLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSwyQ0FBNEM7QUFDNUMsK0NBQTZDO0FBRzdDLElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVksU0FBUSxvQkFBUyxDQUFDLFFBQVEsQ0FBQztDQUFHLENBQUE7QUFBMUMsV0FBVztJQUR2QixtQkFBVSxFQUFFO0dBQ0EsV0FBVyxDQUErQjtBQUExQyxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICdAbmVzdGpzL3Bhc3Nwb3J0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJlYXJlckd1YXJkIGV4dGVuZHMgQXV0aEd1YXJkKCdiZWFyZXInKSB7fVxuIl19