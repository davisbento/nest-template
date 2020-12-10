import { User } from '../../modules/user/user.entity';

export interface IUser extends User {}

export interface IUserRequest {
  id: string;
  email: string;
}
