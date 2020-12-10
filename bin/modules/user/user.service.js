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
    async findByEmail(email) {
        const user = await this.userRepository.findOne({ email });
        if (!user) {
            throw new common_1.HttpException('User not found', 404);
        }
        return user;
    }
    async findById(id) {
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
    async update(id, model) {
        const user = await this.userRepository.findOne(id);
        if (!user) {
            throw new common_1.HttpException('User not found', 404);
        }
        const userUpdated = {
            ...user,
            ...model
        };
        await this.userRepository.save(userUpdated);
        return { ...model };
    }
};
UserService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, typeorm_1.InjectRepository(user_repository_1.UserRepository)),
    tslib_1.__metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlci91c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDJDQUEyRDtBQUMzRCw2Q0FBbUQ7QUFFbkQsNERBQTZEO0FBRTdELCtDQUFxQztBQUNyQyx1REFBbUQ7QUFJbkQsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztJQUN0QixZQUVtQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDOUMsQ0FBQztJQUVHLE9BQU87UUFDWixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVNLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBYTtRQUNwQyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUUxRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsTUFBTSxJQUFJLHNCQUFhLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDaEQ7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQVU7UUFDOUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVuRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsTUFBTSxJQUFJLHNCQUFhLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDaEQ7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxLQUFLLENBQUMsS0FBbUI7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRU0sS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFzQjtRQUMxQyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBRXZFLElBQUksSUFBSSxFQUFFO1lBQ1IsTUFBTSxJQUFJLHNCQUFhLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDckQ7UUFFRCxNQUFNLGNBQWMsR0FBRyxNQUFNLHVCQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTFELE1BQU0sT0FBTyxHQUFHLElBQUksa0JBQUksRUFBRSxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUMxQixPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDNUIsT0FBTyxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7UUFFbEMsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV4QyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFVLEVBQUUsS0FBb0I7UUFDbEQsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVuRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsTUFBTSxJQUFJLHNCQUFhLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDaEQ7UUFFRCxNQUFNLFdBQVcsR0FBRztZQUNsQixHQUFHLElBQUk7WUFDUCxHQUFHLEtBQUs7U0FDVCxDQUFDO1FBRUYsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUU1QyxPQUFPLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQztJQUN0QixDQUFDO0NBQ0YsQ0FBQTtBQXJFWSxXQUFXO0lBRHZCLG1CQUFVLEVBQUU7SUFHUixtQkFBQSwwQkFBZ0IsQ0FBQyxnQ0FBYyxDQUFDLENBQUE7NkNBQ0EsZ0NBQWM7R0FIdEMsV0FBVyxDQXFFdkI7QUFyRVksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXhjZXB0aW9uLCBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0UmVwb3NpdG9yeSB9IGZyb20gJ0BuZXN0anMvdHlwZW9ybSc7XG5cbmltcG9ydCB7IGhhc2hQYXNzd29yZCB9IGZyb20gJy4uLy4uL2dsb2JhbC9oZWxwZXJzL3Bhc3N3b3JkJztcbmltcG9ydCB7IFVzZXJMb2dpbkRUTywgVXNlclJlZ2lzdGVyRFRPIH0gZnJvbSAnLi4vYXV0aC9hdXRoLnZhbGlkYXRpb24nO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vdXNlci5lbnRpdHknO1xuaW1wb3J0IHsgVXNlclJlcG9zaXRvcnkgfSBmcm9tICcuL3VzZXIucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBVc2VyVXBkYXRlRFRPIH0gZnJvbSAnLi91c2VyLnZhbGlkYXRpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0UmVwb3NpdG9yeShVc2VyUmVwb3NpdG9yeSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IHVzZXJSZXBvc2l0b3J5OiBVc2VyUmVwb3NpdG9yeVxuICApIHt9XG5cbiAgcHVibGljIGZpbmRBbGwoKTogUHJvbWlzZTxVc2VyW10+IHtcbiAgICByZXR1cm4gdGhpcy51c2VyUmVwb3NpdG9yeS5maW5kKCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZmluZEJ5RW1haWwoZW1haWw6IHN0cmluZyk6IFByb21pc2U8VXNlcj4ge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLnVzZXJSZXBvc2l0b3J5LmZpbmRPbmUoeyBlbWFpbCB9KTtcblxuICAgIGlmICghdXNlcikge1xuICAgICAgdGhyb3cgbmV3IEh0dHBFeGNlcHRpb24oJ1VzZXIgbm90IGZvdW5kJywgNDA0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdXNlcjtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBmaW5kQnlJZChpZDogbnVtYmVyKTogUHJvbWlzZTxVc2VyPiB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMudXNlclJlcG9zaXRvcnkuZmluZE9uZShpZCk7XG5cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHRocm93IG5ldyBIdHRwRXhjZXB0aW9uKCdVc2VyIG5vdCBmb3VuZCcsIDQwNCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVzZXI7XG4gIH1cblxuICBwdWJsaWMgbG9naW4obW9kZWw6IFVzZXJMb2dpbkRUTykge1xuICAgIGNvbnNvbGUubG9nKG1vZGVsKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyByZWdpc3Rlcihtb2RlbDogVXNlclJlZ2lzdGVyRFRPKSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMudXNlclJlcG9zaXRvcnkuZmluZE9uZSh7IGVtYWlsOiBtb2RlbC5lbWFpbCB9KTtcblxuICAgIGlmICh1c2VyKSB7XG4gICAgICB0aHJvdyBuZXcgSHR0cEV4Y2VwdGlvbignVXNlciBhbHJlYWR5IGV4aXN0cycsIDQwOSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBoYXNoUGFzc3dvcmQobW9kZWwucGFzc3dvcmQpO1xuXG4gICAgY29uc3QgbmV3VXNlciA9IG5ldyBVc2VyKCk7XG4gICAgbmV3VXNlci5uYW1lID0gbW9kZWwubmFtZTtcbiAgICBuZXdVc2VyLmVtYWlsID0gbW9kZWwuZW1haWw7XG4gICAgbmV3VXNlci5wYXNzd29yZCA9IGhhc2hlZFBhc3N3b3JkO1xuXG4gICAgYXdhaXQgdGhpcy51c2VyUmVwb3NpdG9yeS5zYXZlKG5ld1VzZXIpO1xuXG4gICAgcmV0dXJuIHsgbmFtZTogbW9kZWwubmFtZSwgZW1haWw6IG1vZGVsLmVtYWlsIH07XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgdXBkYXRlKGlkOiBudW1iZXIsIG1vZGVsOiBVc2VyVXBkYXRlRFRPKSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMudXNlclJlcG9zaXRvcnkuZmluZE9uZShpZCk7XG5cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHRocm93IG5ldyBIdHRwRXhjZXB0aW9uKCdVc2VyIG5vdCBmb3VuZCcsIDQwNCk7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlclVwZGF0ZWQgPSB7XG4gICAgICAuLi51c2VyLFxuICAgICAgLi4ubW9kZWxcbiAgICB9O1xuXG4gICAgYXdhaXQgdGhpcy51c2VyUmVwb3NpdG9yeS5zYXZlKHVzZXJVcGRhdGVkKTtcblxuICAgIHJldHVybiB7IC4uLm1vZGVsIH07XG4gIH1cbn1cbiJdfQ==