"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./modules/app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(process.env.PORT || 8080);
}
bootstrap();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNEJBQTBCO0FBRTFCLDJDQUFnRDtBQUNoRCx1Q0FBMkM7QUFFM0MscURBQWlEO0FBRWpELEtBQUssVUFBVSxTQUFTO0lBQ3RCLE1BQU0sR0FBRyxHQUFHLE1BQU0sa0JBQVcsQ0FBQyxNQUFNLENBQUMsc0JBQVMsQ0FBQyxDQUFDO0lBQ2hELEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSx1QkFBYyxFQUFFLENBQUMsQ0FBQztJQUN6QyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUNELFNBQVMsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcblxuaW1wb3J0IHsgVmFsaWRhdGlvblBpcGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBOZXN0RmFjdG9yeSB9IGZyb20gJ0BuZXN0anMvY29yZSc7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9hcHAubW9kdWxlJztcblxuYXN5bmMgZnVuY3Rpb24gYm9vdHN0cmFwKCkge1xuICBjb25zdCBhcHAgPSBhd2FpdCBOZXN0RmFjdG9yeS5jcmVhdGUoQXBwTW9kdWxlKTtcbiAgYXBwLnVzZUdsb2JhbFBpcGVzKG5ldyBWYWxpZGF0aW9uUGlwZSgpKTtcbiAgYXdhaXQgYXBwLmxpc3Rlbihwcm9jZXNzLmVudi5QT1JUIHx8IDgwODApO1xufVxuYm9vdHN0cmFwKCk7XG4iXX0=