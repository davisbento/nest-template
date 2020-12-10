"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const password_1 = require("../../global/helpers/password");
const user_entity_1 = require("./user.entity");
const user_repository_1 = require("./user.repository");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    findAll() {
        return this.userRepository.find();
    }
    async findOne(id) {
        const user = await this.userRepository.findOne(id);
        if (!user) {
            throw new common_1.HttpException('User not found', 404);
        }
        return user;
    }
    login(model) {
        console.log(model);
    }
    async register(model) {
        const user = await this.userRepository.findOne({ email: model.email });
        if (user) {
            throw new common_1.HttpException('User already exists', 409);
        }
        const hashedPassword = await password_1.hashPassword(model.password);
        const newUser = new user_entity_1.User();
        newUser.name = model.name;
        newUser.email = model.email;
        newUser.password = hashedPassword;
        await this.userRepository.save(newUser);
        return { name: model.name, email: model.email };
    }
    async delete(id) {
        const user = await this.userRepository.findOne(id);
        if (!user) {
            throw new common_1.HttpException('User not found', 404);
        }
        return this.userRepository.remove(user);
    }
    async update(id, model) {
        const user = await this.userRepository.findOne(id);
        if (!user) {
            throw new common_1.HttpException('User not found', 404);
        }
        const userUpdated = {
            ...user,
            ...model
        };
        return this.userRepository.save(userUpdated);
    }
};
UserService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, typeorm_1.InjectRepository(user_repository_1.UserRepository)),
    tslib_1.__metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlci91c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDJDQUEyRDtBQUMzRCw2Q0FBbUQ7QUFFbkQsNERBQTZEO0FBRTdELCtDQUFxQztBQUNyQyx1REFBbUQ7QUFJbkQsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztJQUN0QixZQUVtQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDOUMsQ0FBQztJQUVHLE9BQU87UUFDWixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVNLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBVTtRQUM3QixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRW5ELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxNQUFNLElBQUksc0JBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNoRDtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLEtBQUssQ0FBQyxLQUFtQjtRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFTSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQXNCO1FBQzFDLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFFdkUsSUFBSSxJQUFJLEVBQUU7WUFDUixNQUFNLElBQUksc0JBQWEsQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNyRDtRQUVELE1BQU0sY0FBYyxHQUFHLE1BQU0sdUJBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFMUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxrQkFBSSxFQUFFLENBQUM7UUFDM0IsT0FBTyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUM1QixPQUFPLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQztRQUVsQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXhDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFTSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQVU7UUFDNUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVuRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsTUFBTSxJQUFJLHNCQUFhLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDaEQ7UUFFRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQVUsRUFBRSxLQUFvQjtRQUNsRCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRW5ELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxNQUFNLElBQUksc0JBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNoRDtRQUVELE1BQU0sV0FBVyxHQUFHO1lBQ2xCLEdBQUcsSUFBSTtZQUNQLEdBQUcsS0FBSztTQUNULENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Q0FDRixDQUFBO0FBbkVZLFdBQVc7SUFEdkIsbUJBQVUsRUFBRTtJQUdSLG1CQUFBLDBCQUFnQixDQUFDLGdDQUFjLENBQUMsQ0FBQTs2Q0FDQSxnQ0FBYztHQUh0QyxXQUFXLENBbUV2QjtBQW5FWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFeGNlcHRpb24sIEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RSZXBvc2l0b3J5IH0gZnJvbSAnQG5lc3Rqcy90eXBlb3JtJztcblxuaW1wb3J0IHsgaGFzaFBhc3N3b3JkIH0gZnJvbSAnLi4vLi4vZ2xvYmFsL2hlbHBlcnMvcGFzc3dvcmQnO1xuaW1wb3J0IHsgVXNlckxvZ2luRFRPLCBVc2VyUmVnaXN0ZXJEVE8gfSBmcm9tICcuLi9hdXRoL2F1dGgudmFsaWRhdGlvbic7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyLmVudGl0eSc7XG5pbXBvcnQgeyBVc2VyUmVwb3NpdG9yeSB9IGZyb20gJy4vdXNlci5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFVzZXJVcGRhdGVEVE8gfSBmcm9tICcuL3VzZXIudmFsaWRhdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3RSZXBvc2l0b3J5KFVzZXJSZXBvc2l0b3J5KVxuICAgIHByaXZhdGUgcmVhZG9ubHkgdXNlclJlcG9zaXRvcnk6IFVzZXJSZXBvc2l0b3J5XG4gICkge31cblxuICBwdWJsaWMgZmluZEFsbCgpOiBQcm9taXNlPFVzZXJbXT4ge1xuICAgIHJldHVybiB0aGlzLnVzZXJSZXBvc2l0b3J5LmZpbmQoKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBmaW5kT25lKGlkOiBudW1iZXIpOiBQcm9taXNlPFVzZXI+IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy51c2VyUmVwb3NpdG9yeS5maW5kT25lKGlkKTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgdGhyb3cgbmV3IEh0dHBFeGNlcHRpb24oJ1VzZXIgbm90IGZvdW5kJywgNDA0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXNlcjtcbiAgfVxuXG4gIHB1YmxpYyBsb2dpbihtb2RlbDogVXNlckxvZ2luRFRPKSB7XG4gICAgY29uc29sZS5sb2cobW9kZWwpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHJlZ2lzdGVyKG1vZGVsOiBVc2VyUmVnaXN0ZXJEVE8pIHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy51c2VyUmVwb3NpdG9yeS5maW5kT25lKHsgZW1haWw6IG1vZGVsLmVtYWlsIH0pO1xuXG4gICAgaWYgKHVzZXIpIHtcbiAgICAgIHRocm93IG5ldyBIdHRwRXhjZXB0aW9uKCdVc2VyIGFscmVhZHkgZXhpc3RzJywgNDA5KTtcbiAgICB9XG5cbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGhhc2hQYXNzd29yZChtb2RlbC5wYXNzd29yZCk7XG5cbiAgICBjb25zdCBuZXdVc2VyID0gbmV3IFVzZXIoKTtcbiAgICBuZXdVc2VyLm5hbWUgPSBtb2RlbC5uYW1lO1xuICAgIG5ld1VzZXIuZW1haWwgPSBtb2RlbC5lbWFpbDtcbiAgICBuZXdVc2VyLnBhc3N3b3JkID0gaGFzaGVkUGFzc3dvcmQ7XG5cbiAgICBhd2FpdCB0aGlzLnVzZXJSZXBvc2l0b3J5LnNhdmUobmV3VXNlcik7XG5cbiAgICByZXR1cm4geyBuYW1lOiBtb2RlbC5uYW1lLCBlbWFpbDogbW9kZWwuZW1haWwgfTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBkZWxldGUoaWQ6IG51bWJlcik6IFByb21pc2U8VXNlcj4ge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLnVzZXJSZXBvc2l0b3J5LmZpbmRPbmUoaWQpO1xuXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICB0aHJvdyBuZXcgSHR0cEV4Y2VwdGlvbignVXNlciBub3QgZm91bmQnLCA0MDQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnVzZXJSZXBvc2l0b3J5LnJlbW92ZSh1c2VyKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyB1cGRhdGUoaWQ6IG51bWJlciwgbW9kZWw6IFVzZXJVcGRhdGVEVE8pOiBQcm9taXNlPFVzZXI+IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy51c2VyUmVwb3NpdG9yeS5maW5kT25lKGlkKTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgdGhyb3cgbmV3IEh0dHBFeGNlcHRpb24oJ1VzZXIgbm90IGZvdW5kJywgNDA0KTtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyVXBkYXRlZCA9IHtcbiAgICAgIC4uLnVzZXIsXG4gICAgICAuLi5tb2RlbFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS5zYXZlKHVzZXJVcGRhdGVkKTtcbiAgfVxufVxuIl19