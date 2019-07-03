import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { UserRepository } from '../repository/user';
import { UserService } from '../services/user';

describe('UserService', () => {
  let userRepository: UserRepository;
  let userService: UserService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(UserRepository),
          useClass: UserRepository,
        },
      ],
    }).compile();

    userService = module.get(UserService);
    userRepository = module.get(UserRepository);
  });

  it('should return an array of users', async () => {
    const result = [{ id: 1, name: 'Test', email: 'test@test.com' }];

    jest
      .spyOn(userRepository, 'find')
      .mockImplementationOnce(async () => result);

    expect(await userService.findAll()).toBe(result);
  });

  it('should return one user', async () => {
    const result = { id: 1, name: 'Test', email: 'test@test.com' };

    jest
      .spyOn(userRepository, 'findOne')
      .mockImplementationOnce(async () => result);

    expect(await userService.findOne(1)).toBe(result);
  });

  it('should create one user', async () => {
    const newUser = { id: 1, name: 'Test', email: 'test@test.com' };

    jest
      .spyOn(userRepository, 'save')
      .mockImplementationOnce(async () => newUser);

    expect(await userService.create(newUser)).toBe(newUser);
  });
});
