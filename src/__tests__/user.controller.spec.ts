import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../controllers/user';
import { UserService } from '../services/user';

describe('UserController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userController = app.get<UserController>(UserController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const expected = { message: 'Hello world' };
      expect(userController.getHello()).toMatchObject(expected);
    });
  });
});
