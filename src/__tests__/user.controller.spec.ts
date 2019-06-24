import { Test } from '@nestjs/testing';
import { UserController } from '../controllers/user';
import { UserService } from '../services/user';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([User])],
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userService = module.get<UserService>(UserService);
    userController = module.get<UserController>(UserController);
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const result = async () => {
        return [{ id: 1, name: 'Test', email: 'test@test.com' }];
      };
      jest.spyOn(userService, 'findAll').mockImplementation(() => result());

      expect(await userController.findAll()).toBe(result);
    });
  });
});
