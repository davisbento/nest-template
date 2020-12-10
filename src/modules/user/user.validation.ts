import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserUpdateDTO {
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  public name: string;
}
